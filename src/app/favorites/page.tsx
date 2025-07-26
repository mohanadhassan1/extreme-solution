'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import UsersList from '@/components/UsersList';
import Link from 'next/link';
import Loading from '@/components/Loading';

const FavoritesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const favorites = useSelector((state: RootState) => state.favorites.users);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-blue-500 hover:text-blue-600">
              &larr; Back to Users
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Favorite Users</h1>
          </div>
        </div>
        
        {favorites.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 dark:text-gray-400">No favorite users yet. Add some from the users list!</p>
          </div>
        ) : (
          <UsersList 
            users={favorites} 
            favorites={favorites} 
            loading={false}
          />
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;