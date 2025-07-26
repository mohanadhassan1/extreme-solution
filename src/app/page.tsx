'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, searchUsers } from '../lib/api';
import { User } from '../types/user';
import UsersList from '../components/UsersList';
import PaginationControls from '../components/PaginationControls';
import SearchInput from '../components/SearchInput';
import DarkModeToggle from '../components/DarkModeToggle';
import { RootState } from '../store/store';
import Link from 'next/link';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const favorites = useSelector((state: RootState) => state.favorites.users);
  const dispatch = useDispatch();

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

  if (error) {
    return (
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">GitHub Users Explorer</h1>
          <div className='flex flex-row items-center justify-center gap-8'>
            <Link href='/favorites' className=''>Favorites</Link>
            <DarkModeToggle />
          </div>
        </div>
        
        <SearchInput onSearch={handleSearch} />
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
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
