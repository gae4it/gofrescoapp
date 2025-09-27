"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { CartItem } from "./CartContext";

export interface Order {
  id: string;
  items: CartItem[];
  customerInfo: {
    name: string;
    email: string;
    phone?: string;
    notes?: string;
  };
  total: number;
  date: string;
  status: 'sent' | 'pending';
}

interface OrderHistoryContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'date'>) => void;
  clearHistory: () => void;
  reorderItems: (orderId: string) => CartItem[];
}

const OrderHistoryContext = createContext<OrderHistoryContextType | undefined>(undefined);

const STORAGE_KEY = 'gofresco-order-history';

export function OrderHistoryProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  // Load orders from localStorage on mount
  useEffect(() => {
    const savedOrders = localStorage.getItem(STORAGE_KEY);
    if (savedOrders) {
      try {
        const parsedOrders = JSON.parse(savedOrders) as Order[];
        setOrders(parsedOrders);
      } catch (error) {
        console.error('Error loading order history:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Save orders to localStorage whenever orders change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  const addOrder = (orderData: Omit<Order, 'id' | 'date'>) => {
    const newOrder: Order = {
      ...orderData,
      id: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      date: new Date().toISOString(),
    };

    setOrders(prev => [newOrder, ...prev]); // Add new order at the beginning
  };

  const clearHistory = () => {
    setOrders([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const reorderItems = (orderId: string): CartItem[] => {
    const order = orders.find(o => o.id === orderId);
    return order?.items ?? [];
  };

  return (
    <OrderHistoryContext.Provider value={{
      orders,
      addOrder,
      clearHistory,
      reorderItems,
    }}>
      {children}
    </OrderHistoryContext.Provider>
  );
}

export function useOrderHistory() {
  const context = useContext(OrderHistoryContext);
  if (context === undefined) {
    throw new Error('useOrderHistory must be used within an OrderHistoryProvider');
  }
  return context;
}