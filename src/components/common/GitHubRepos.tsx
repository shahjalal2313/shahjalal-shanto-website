'use client';

import { useState, useEffect } from 'react';

// --- Local, Reusable Components ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-card border border-border rounded-lg p-6 flex flex-col h-full transition-shadow hover:shadow-lg ${className}`}>
      {children}
    </div>
  );
};

interface TagProps {
  children: React.ReactNode;
}

const Tag = ({ children }: TagProps) => {
  return (
    <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary-foreground border border-secondary/20 rounded-full text-xs font-medium">
      {children}
    </span>
  );
};

const Button = ({ href }: { href: string }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block mt-auto pt-4 text-center font-sans font-semibold text-primary hover:underline">
      View Repository →
    </a>
  );
};

// --- Main Component ---
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
}

interface GitHubReposProps {
  username?: string;
  maxRepos?: number;
}

export default function GitHubRepos({ username = 'shahjalal-shanto', maxRepos = 6 }: GitHubReposProps) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${maxRepos}`);
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [username, maxRepos]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (repos.length === 0) return <EmptyState />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
    </div>
  );
}

// --- State & Sub-Components ---
interface RepoCardProps {
  repo: GitHubRepo;
}

const RepoCard = ({ repo }: RepoCardProps) => {
  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = { 'TypeScript': '#2b7489', 'Python': '#3572a5' };
    return colors[language] || '#64748b';
  };

  return (
    <Card>
      <div className="flex-grow">
        <h3 className="text-lg font-sans font-semibold text-foreground mb-2">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            {repo.name}
          </a>
        </h3>
        <p className="text-sm text-muted font-serif mb-4 flex-grow min-h-[40px]">
          {repo.description || 'No description available.'}
        </p>
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {repo.topics.slice(0, 3).map((topic: string) => <Tag key={topic}>{topic}</Tag>)}
          </div>
        )}
        <div className="flex items-center justify-between text-sm text-muted font-sans">
          <div className="flex items-center">
            {repo.language && (
              <>
                <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: getLanguageColor(repo.language) }}></span>
                <span>{repo.language}</span>
              </>
            )}
          </div>
          <span>★ {repo.stargazers_count}</span>
        </div>
      </div>
      <Button href={repo.html_url} />
    </Card>
  );
};

const LoadingState = () => (
  <div className="text-center py-8 col-span-full">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
    <p className="mt-2 text-muted font-sans">Loading repositories...</p>
  </div>
);

interface ErrorStateProps {
  message: string;
}

const ErrorState = ({ message }: ErrorStateProps) => (
  <div className="text-center py-8 col-span-full">
    <p className="text-red-500 font-sans">Error: {message}</p>
  </div>
);

const EmptyState = () => (
  <div className="text-center py-8 col-span-full">
    <p className="text-muted font-sans">No repositories found.</p>
  </div>
);
