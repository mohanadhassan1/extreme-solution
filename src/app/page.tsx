'use client';

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, searchUsers } from '@/lib/api';
import { User } from '@/types/user';
import UsersList from '@/components/UsersList';
import PaginationControls from '@/components/PaginationControls';
import SearchInput from '@/components/SearchInput';
import { RootState } from '@/store/store';
import Link from 'next/link';
import { Heart, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import Loading from '@/components/Loading';
import ErrorBanner from '@/components/ErrorBanner';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const favorites = useSelector((state: RootState) => state.favorites.users);
  const { theme, toggleTheme } = useTheme();


  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true);
        const { data, totalPages } = await fetchUsers(currentPage, 10);
        setUsers(data);
        setFilteredUsers(data);
        setTotalPages(totalPages);
        setError(null);
      } catch (err) {
        setError('Failed to fetch users. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, [currentPage]);

  useEffect(() => {
    if (searchQuery) {
      const results = searchUsers(users, searchQuery);
      setFilteredUsers(results);
    } else {
      setFilteredUsers(users);
    }
  }, [searchQuery, users]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleRetry = () => {
    setError(null);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link href='/' className="text-3xl font-bold text-gray-900 dark:text-white">GitHub Users</Link>
          <div className='flex flex-row items-center justify-center gap-8'>
            <Link href='/favorites' className='relative group flex flex-col items-center'>
              <div className='relative'>
                <Heart 
                  className={`
                    h-6 w-6 
                    transition-all duration-300 
                    ${favorites.length > 0 
                      ? 'fill-red-500 text-red-500' 
                      : 'text-gray-400 dark:text-gray-500'
                    }
                    group-hover:scale-110
                  `}
                />
                
                {favorites.length > 0 && (
                  <div className='
                    absolute -top-2 -right-2
                    bg-red-500 text-white
                    rounded-full w-5 h-5
                    flex items-center justify-center
                    text-xs font-medium
                    animate-pulse
                  '>
                    {favorites.length}
                  </div>
                )}
              </div>
              <span className='
                text-xs mt-1
                text-gray-500 dark:text-gray-400
                group-hover:text-gray-700 dark:group-hover:text-gray-200
                transition-colors
              '>
                Favorites
              </span>
            </Link>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        <SearchInput onSearch={handleSearch} />
        
        {isLoading ? (
          <Loading />
        ) : error ? (
          <ErrorBanner message={error} onRetry={handleRetry} />
        ) : (
          <>
            <UsersList 
              users={filteredUsers} 
              favorites={favorites} 
            />
            
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
}
