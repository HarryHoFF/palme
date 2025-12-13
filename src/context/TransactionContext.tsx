import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Transaction } from '../types';

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
  updateTransaction: (id: string, transaction: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

const mockTransactions: Transaction[] = [
  {
                                                                                                                                                                                                                                                                                    id: '270',
    type: 'received',
    amount: 24.80,
    sender: 'Saskia Ißleib',
    description: 'Payment received',
    date: new Date('2025-12-13'),
    status: 'completed'
  },
  {
                                                                                                                          id: '271',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-12-13'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                                                                                id: '270',
    type: 'received',
    amount: 42.75,
    sender: 'Steffi Benzinger',
    description: 'Payment received',
    date: new Date('2025-12-12'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                                                                            id: '270',
    type: 'received',
    amount: 25.80,
    sender: 'Saskia Walter',
    description: 'Payment received',
    date: new Date('2025-12-12'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                                                                        id: '270',
    type: 'received',
    amount: 77.04,
    sender: 'Svenja Mayeres',
    description: 'Payment received',
    date: new Date('2025-12-12'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                                                                    id: '270',
    type: 'received',
    amount: 89.00,
    sender: 'Heike Schulz',
    description: 'Payment received',
    date: new Date('2025-12-11'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                                                                id: '270',
    type: 'received',
    amount: 32.75,
    sender: 'Kathrin Dzieia',
    description: 'Payment received',
    date: new Date('2025-12-10'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                                                            id: '270',
    type: 'received',
    amount: 53.65,
    sender: 'Till Göttsche',
    description: 'Payment received',
    date: new Date('2025-12-09'),
    status: 'completed'
  },
  {
                                                                                                                      id: '271',
    type: 'payment',
    amount: 91.66,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-12-08'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                                                        id: '270',
    type: 'received',
    amount: 75.80,
    sender: 'Eva Siegel',
    description: 'Payment received',
    date: new Date('2025-12-07'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                                                    id: '270',
    type: 'received',
    amount: 45.70,
    sender: 'Meike Kiesel',
    description: 'Payment received',
    date: new Date('2025-12-06'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                                                id: '270',
    type: 'received',
    amount: 31.80,
    sender: 'Sebastian Seeboth',
    description: 'Payment received',
    date: new Date('2025-12-06'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                                            id: '270',
    type: 'received',
    amount: 30.35,
    sender: 'Tiana Grandt',
    description: 'Payment received',
    date: new Date('2025-12-06'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                                        id: '270',
    type: 'received',
    amount: 24.70,
    sender: 'Julita Pilch',
    description: 'Payment received',
    date: new Date('2025-12-06'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                                    id: '270',
    type: 'received',
    amount: 70.15,
    sender: 'Petra Oldenburg',
    description: 'Payment received',
    date: new Date('2025-12-05'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                                id: '270',
    type: 'received',
    amount: 60.35,
    sender: 'Rita Thomsen',
    description: 'Payment received',
    date: new Date('2025-12-05'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                            id: '270',
    type: 'received',
    amount: 76.85,
    sender: 'Christiane Stein',
    description: 'Payment received',
    date: new Date('2025-12-05'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                        id: '270',
    type: 'received',
    amount: 43.25,
    sender: 'Sabrina Albers',
    description: 'Payment received',
    date: new Date('2025-12-04'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                    id: '270',
    type: 'received',
    amount: 110.15,
    sender: 'Heike Budeweit',
    description: 'Payment received',
    date: new Date('2025-12-04'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                                id: '270',
    type: 'received',
    amount: 32.70,
    sender: 'Franziska Köpnick',
    description: 'Payment received',
    date: new Date('2025-12-02'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                            id: '270',
    type: 'received',
    amount: 77.60,
    sender: 'Jana Schlechte',
    description: 'Payment received',
    date: new Date('2025-12-02'),
    status: 'completed'
  },
  {
                                                                                                                  id: '271',
    type: 'payment',
    amount: 12.38,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-12-02'),
    status: 'completed'
  },
  {
                                                                                                                  id: '271',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-12-02'),
    status: 'completed'
  },
  {
                                                                                                              id: '271',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-12-02'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                        id: '270',
    type: 'received',
    amount: 26.50,
    sender: 'Felix Spazierer',
    description: 'Payment received',
    date: new Date('2025-12-02'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                    id: '270',
    type: 'received',
    amount: 62.20,
    sender: 'Annett Köhn',
    description: 'Payment received',
    date: new Date('2025-12-02'),
    status: 'completed'
  },
  {
                                                                                                          id: '271',
    type: 'payment',
    amount: 7.69,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-12-01'),
    status: 'completed'
  },
  {
                                                                                                          id: '271',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-12-01'),
    status: 'completed'
  },
  {
                                                                                                      id: '271',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-12-01'),
    status: 'completed'
  },
  {
                                                                                                                                                                                                id: '270',
    type: 'received',
    amount: 59.35,
    sender: 'Marit Heinzmann',
    description: 'Payment received',
    date: new Date('2025-11-30'),
    status: 'completed'
  },
  {
                                                                                                                                                                                            id: '270',
    type: 'received',
    amount: 23.80,
    sender: 'Angie Formella',
    description: 'Payment received',
    date: new Date('2025-11-29'),
    status: 'completed'
  },
  {
                                                                                                                                                                                        id: '270',
    type: 'received',
    amount: 80.85,
    sender: 'Britta Jansen',
    description: 'Payment received',
    date: new Date('2025-11-28'),
    status: 'completed'
  },
  {
                                                                                                  id: '271',
    type: 'payment',
    amount: 31.51,
    recipient: 'IONOS SE',
    description: 'Shipping fee',
    date: new Date('2025-11-28'),
    status: 'completed'
  },
  {
                                                                                                  id: '271',
    type: 'payment',
    amount: 12.38,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-11-28'),
    status: 'completed'
  },
  {
                                                                                                                                                                                    id: '270',
    type: 'received',
    amount: 97.00,
    sender: 'Stefan Braun',
    description: 'Payment received',
    date: new Date('2025-11-27'),
    status: 'completed'
  },
  {
                                                                                                                                                                                id: '270',
    type: 'received',
    amount: 31.75,
    sender: 'Karin Rust',
    description: 'Payment received',
    date: new Date('2025-11-27'),
    status: 'completed'
  },
  {
                                                                                                                                                                                id: '270',
    type: 'received',
    amount: 46.65,
    sender: 'Sabine Grunwald',
    description: 'Payment received',
    date: new Date('2025-11-27'),
    status: 'completed'
  },
  {
                                                                                              id: '271',
    type: 'payment',
    amount: 16.68,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-11-27'),
    status: 'completed'
  },
  {
                                                                                              id: '271',
    type: 'payment',
    amount: 38.64,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-11-27'),
    status: 'completed'
  },
  {
                                                                                                                                                                            id: '270',
    type: 'received',
    amount: 81.55,
    sender: 'Alexandra Bruns',
    description: 'Payment received',
    date: new Date('2025-11-27'),
    status: 'completed'
  },
  {
                                                                                                                                                                        id: '270',
    type: 'received',
    amount: 115.35,
    sender: 'Benedikt Bonholzer',
    description: 'Payment received',
    date: new Date('2025-11-26'),
    status: 'completed'
  },
  {
                                                                                                                                                                    id: '270',
    type: 'received',
    amount: 26.85,
    sender: 'Jasmin Radmacher',
    description: 'Payment received',
    date: new Date('2025-11-24'),
    status: 'completed'
  },
  {
                                                                                                                                                                id: '270',
    type: 'received',
    amount: 75.70,
    sender: 'Beate Reyer',
    description: 'Payment received',
    date: new Date('2025-11-24'),
    status: 'completed'
  },
  {
                                                                                                                                                            id: '270',
    type: 'received',
    amount: 26.85,
    sender: 'Inga Golus',
    description: 'Payment received',
    date: new Date('2025-11-23'),
    status: 'completed'
  },
  {
                                                                                                                                                        id: '270',
    type: 'received',
    amount: 28.35,
    sender: 'Monic Zaumseil',
    description: 'Payment received',
    date: new Date('2025-11-22'),
    status: 'completed'
  },
  {
                                                                                          id: '271',
    type: 'payment',
    amount: 24.76,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-11-21'),
    status: 'completed'
  },
  {
                                                                                                                                                    id: '270',
    type: 'received',
    amount: 75.60,
    sender: 'Stefanie Zachmann',
    description: 'Payment received',
    date: new Date('2025-11-20'),
    status: 'completed'
  },
  {
                                                                                                                                                id: '270',
    type: 'received',
    amount: 43.80,
    sender: 'Mona Plieninger',
    description: 'Payment received',
    date: new Date('2025-11-20'),
    status: 'completed'
  },
  {
                                                                                                                                            id: '270',
    type: 'received',
    amount: 43.70,
    sender: 'Cindy Meier-Georgi',
    description: 'Payment received',
    date: new Date('2025-11-20'),
    status: 'completed'
  },
  {
                                                                                                                                        id: '270',
    type: 'received',
    amount: 29.75,
    sender: 'Oliver Fleischer',
    description: 'Payment received',
    date: new Date('2025-11-20'),
    status: 'completed'
  },
  {
                                                                                      id: '271',
    type: 'payment',
    amount: 30.56,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-11-19'),
    status: 'completed'
  },
  {
                                                                                                                                    id: '270',
    type: 'received',
    amount: 32.35,
    sender: 'Yasmin Smolka',
    description: 'Payment received',
    date: new Date('2025-11-19'),
    status: 'completed'
  },
  {
                                                                                                                                id: '270',
    type: 'received',
    amount: 26.85,
    sender: 'Carrie Liepelt',
    description: 'Payment received',
    date: new Date('2025-11-18'),
    status: 'completed'
  },
  {
                                                                                                                              id: '270',
    type: 'received',
    amount: 87.60,
    sender: 'Michelle Bittorf',
    description: 'Payment received',
    date: new Date('2025-11-18'),
    status: 'completed'
  },
  {
                                                                                      id: '271',
    type: 'payment',
    amount: 69.59,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-11-16'),
    status: 'completed'
  },
  {
                                                                                                                          id: '270',
    type: 'received',
    amount: 45.80,
    sender: 'Caren Düse',
    description: 'Payment received',
    date: new Date('2025-11-16'),
    status: 'completed'
  },
  {
                                                                                                                      id: '270',
    type: 'received',
    amount: 139.70,
    sender: 'Tobias Grasmück',
    description: 'Payment received',
    date: new Date('2025-11-15'),
    status: 'completed'
  },
  {
                                                                                                                      id: '270',
    type: 'received',
    amount: 36.30,
    sender: 'Saskia Walter',
    description: 'Payment received',
    date: new Date('2025-11-15'),
    status: 'completed'
  },
  {
                                                                                                                  id: '270',
    type: 'received',
    amount: 34.85,
    sender: 'Bettina Ladegast',
    description: 'Payment received',
    date: new Date('2025-11-14'),
    status: 'completed'
  },
  {
                                                                                                                  id: '270',
    type: 'received',
    amount: 70.50,
    sender: 'Nicole Fuchs',
    description: 'Payment received',
    date: new Date('2025-11-14'),
    status: 'completed'
  },
  {
                                                                                                                  id: '270',
    type: 'received',
    amount: 26.85,
    sender: 'Rieke Himfeldt',
    description: 'Payment received',
    date: new Date('2025-11-14'),
    status: 'completed'
  },
  {
                                                                                  id: '271',
    type: 'payment',
    amount: 46.33,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-11-14'),
    status: 'completed'
  },
  {
                                                                                                              id: '270',
    type: 'received',
    amount: 45.80,
    sender: 'Tankshop GmbH',
    description: 'Payment received',
    date: new Date('2025-11-14'),
    status: 'completed'
  },
  {
                                                                                      id: '270',
    type: 'received',
    amount: 25.30,
    sender: 'Juliane Treptow',
    description: 'Payment received',
    date: new Date('2025-11-14'),
    status: 'completed'
  },
  {
                                                                                                              id: '270',
    type: 'received',
    amount: 38.97,
    sender: 'Claudia Ames',
    description: 'Payment received',
    date: new Date('2025-11-13'),
    status: 'completed'
  },
  {
                                                                                                          id: '270',
    type: 'received',
    amount: 80.85,
    sender: 'Anja Czarnecki',
    description: 'Payment received',
    date: new Date('2025-11-13'),
    status: 'completed'
  },
  {
                                                                                                          id: '270',
    type: 'received',
    amount: 32.85,
    sender: 'Nadine Albers',
    description: 'Payment received',
    date: new Date('2025-11-13'),
    status: 'completed'
  },
  {
                                                                                                      id: '270',
    type: 'received',
    amount: 43.89,
    sender: 'Inga Golus',
    description: 'Payment received',
    date: new Date('2025-11-13'),
    status: 'completed'
  },
  {
                                                                                                      id: '270',
    type: 'received',
    amount: 59.25,
    sender: 'Anja Busch',
    description: 'Payment received',
    date: new Date('2025-11-13'),
    status: 'completed'
  },
  {
                                                                                                      id: '270',
    type: 'received',
    amount: 38.00,
    sender: 'Jennifer Veedu',
    description: 'Payment received',
    date: new Date('2025-11-13'),
    status: 'completed'
  },
  {
                                                                              id: '271',
    type: 'payment',
    amount: 12.38,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-11-12'),
    status: 'completed'
  },
  {
                                                                                                      id: '270',
    type: 'received',
    amount: 72.87,
    sender: 'Gesa Engel',
    description: 'Payment received',
    date: new Date('2025-11-12'),
    status: 'completed'
  },
  {
                                                                              id: '271',
    type: 'payment',
    amount: 40.14,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-11-11'),
    status: 'completed'
  },
  {
                                                                                                      id: '270',
    type: 'received',
    amount: 74.51,
    sender: 'Erika Zenk',
    description: 'Payment received',
    date: new Date('2025-11-12'),
    status: 'completed'
  },
  {
                                                                                                      id: '270',
    type: 'received',
    amount: 50.15,
    sender: 'Ulrike Wulf',
    description: 'Payment received',
    date: new Date('2025-11-12'),
    status: 'completed'
  },
  {
                                                                                                      id: '270',
    type: 'received',
    amount: 50.51,
    sender: 'Sabine Gräger',
    description: 'Payment received',
    date: new Date('2025-11-11'),
    status: 'completed'
  },
  {
                                                                                                      id: '270',
    type: 'received',
    amount: 34.18,
    sender: 'Karin Rust',
    description: 'Payment received',
    date: new Date('2025-11-11'),
    status: 'completed'
  },
  {
                                                                                                  id: '270',
    type: 'received',
    amount: 50.15,
    sender: 'Tanja Evers',
    description: 'Payment received',
    date: new Date('2025-11-10'),
    status: 'completed'
  },
  {
                                                                                              id: '270',
    type: 'received',
    amount: 76.00,
    sender: 'Oliver Fleischer',
    description: 'Payment received',
    date: new Date('2025-11-09'),
    status: 'completed'
  },
  {
                                                                          id: '271',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-11-09'),
    status: 'completed'
  },
  {
                                                                                          id: '270',
    type: 'received',
    amount: 96.55,
    sender: 'Hagen Hodea',
    description: 'Payment received',
    date: new Date('2025-11-09'),
    status: 'completed'
  },
  {
                                                                      id: '271',
    type: 'payment',
    amount: 15.38,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-11-06'),
    status: 'completed'
  },
  {
                                                                  id: '271',
    type: 'payment',
    amount: 26.26,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-11-05'),
    status: 'completed'
  },
  {
                                                                                      id: '270',
    type: 'received',
    amount: 48.75,
    sender: 'Peggy Möller',
    description: 'Payment received',
    date: new Date('2025-11-05'),
    status: 'completed'
  },
  {
                                                                                  id: '270',
    type: 'received',
    amount: 80.85,
    sender: 'Birte Hansen',
    description: 'Payment received',
    date: new Date('2025-11-05'),
    status: 'completed'
  },
  {
                                                                                  id: '270',
    type: 'received',
    amount: 26.85,
    sender: 'Mareike Mohr',
    description: 'Payment received',
    date: new Date('2025-11-05'),
    status: 'completed'
  },
  {
                                                              id: '271',
    type: 'payment',
    amount: 12.38,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-11-02'),
    status: 'completed'
  },
  {
                                                                              id: '270',
    type: 'received',
    amount: 47.70,
    sender: 'Annika Zimmek',
    description: 'Payment received',
    date: new Date('2025-11-02'),
    status: 'completed'
  },
  {
                                                                          id: '270',
    type: 'received',
    amount: 45.20,
    sender: 'Stefan Braun',
    description: 'Payment received',
    date: new Date('2025-10-30'),
    status: 'completed'
  },
  {
                                                          id: '271',
    type: 'payment',
    amount: 25.18,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-10-29'),
    status: 'completed'
  },
  {
                                                      id: '271',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-10-23'),
    status: 'completed'
  },
  {
                                                                      id: '270',
    type: 'received',
    amount: 26.85,
    sender: 'Jasmin Radmacher',
    description: 'Payment received',
    date: new Date('2025-10-23'),
    status: 'completed'
  },
  {
                                                  id: '271',
    type: 'payment',
    amount: 12.38,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-10-23'),
    status: 'completed'
  },
  {
                                                                  id: '270',
    type: 'received',
    amount: 40.85,
    sender: 'Sarah Steffen',
    description: 'Payment received',
    date: new Date('2025-10-22'),
    status: 'completed'
  },
  {
                                                                  id: '270',
    type: 'received',
    amount: 14.00,
    sender: 'Josy Hohberg',
    description: 'Payment received',
    date: new Date('2025-10-22'),
    status: 'completed'
  },
  {
                                                              id: '270',
    type: 'received',
    amount: 64.75,
    sender: 'Rebekka Dorka',
    description: 'Payment received',
    date: new Date('2025-10-21'),
    status: 'completed'
  },
  {
                                              id: '271',
    type: 'payment',
    amount: 37.14,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-10-19'),
    status: 'completed'
  },
  {
                                                          id: '270',
    type: 'received',
    amount: 57.80,
    sender: 'Gunda Jacobsen',
    description: 'Payment received',
    date: new Date('2025-10-19'),
    status: 'completed'
  },
  {
                                                      id: '270',
    type: 'received',
    amount: 52.65,
    sender: 'Jessica Waldhauer',
    description: 'Payment received',
    date: new Date('2025-10-18'),
    status: 'completed'
  },
  {
            id: '271',
    type: 'payment',
    amount: 3000.00,
    recipient: 'Ines Ehlerts',
    description: 'Business payment',
    date: new Date('2025-10-17'),
    status: 'canceled'
  },
  {  
        id: '271',
    type: 'payment',
    amount: 413.39,
    recipient: 'CMC Tasly Group BV',
    description: 'Business payment',
    date: new Date('2025-10-17'),
    status: 'canceled'
  },
  {  
                                                  id: '270',
    type: 'received',
    amount: 75.80,
    sender: 'Sibylle Henkel',
    description: 'Payment received',
    date: new Date('2025-10-16'),
    status: 'completed'
  },
  {
                                                  id: '270',
    type: 'received',
    amount: 32.85,
    sender: 'Stefanie Krause',
    description: 'Payment received',
    date: new Date('2025-10-16'),
    status: 'completed'
  },
  {
                                          id: '271',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-10-16'),
    status: 'completed'
  },
  {
                                              id: '270',
    type: 'received',
    amount: 45.15,
    sender: 'Jutta Westphal',
    description: 'Payment received',
    date: new Date('2025-10-15'),
    status: 'completed'
  },
  {
                                      id: '271',
    type: 'payment',
    amount: 12.38,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-10-15'),
    status: 'completed'
  },
  {
                                          id: '270',
    type: 'received',
    amount: 50.70,
    sender: 'Beatrice Rick',
    description: 'Payment received',
    date: new Date('2025-10-15'),
    status: 'completed'
  },
  {
                                      id: '270',
    type: 'received',
    amount: 38.75,
    sender: 'Melanie Beyermann',
    description: 'Payment received',
    date: new Date('2025-10-15'),
    status: 'completed'
  },
  {
                                  id: '271',
    type: 'payment',
    amount: 18.57,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-10-15'),
    status: 'completed'
  },
  {
                                    id: '270',
    type: 'received',
    amount: 49.60,
    sender: 'Petra Rühle',
    description: 'Payment received',
    date: new Date('2025-10-15'),
    status: 'completed'
  },
  {
                                  id: '271',
    type: 'payment',
    amount: 208.50,
    recipient: 'CAC Amsterdam',
    description: 'Shipping fee',
    date: new Date('2025-10-14'),
    status: 'completed'
  },
  {
                                id: '270',
    type: 'received',
    amount: 32.85,
    sender: 'Birgit Sass',
    description: 'Payment received',
    date: new Date('2025-10-13'),
    status: 'completed'
  },
  {
                            id: '270',
    type: 'received',
    amount: 45.80,
    sender: 'Saskia Treschau',
    description: 'Payment received',
    date: new Date('2025-10-12'),
    status: 'completed'
  },
  {
                        id: '270',
    type: 'received',
    amount: 65.55,
    sender: 'Sandra Rustemeier',
    description: 'Payment received',
    date: new Date('2025-10-11'),
    status: 'completed'
  },
  {
                              id: '271',
    type: 'payment',
    amount: 13.88,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-10-10'),
    status: 'completed'
  },
  {
                    id: '270',
    type: 'received',
    amount: 22.85,
    sender: 'Nicole Woithon-Dornseif',
    description: 'Payment received',
    date: new Date('2025-10-09'),
    status: 'completed'
  },
  {
                    id: '270',
    type: 'received',
    amount: 53.70,
    sender: 'Peggy Möller',
    description: 'Payment received',
    date: new Date('2025-10-08'),
    status: 'completed'
  },
  {
                id: '270',
    type: 'received',
    amount: 80.85,
    sender: 'Kristin Sönnichsen',
    description: 'Payment received',
    date: new Date('2025-10-07'),
    status: 'completed'
  },
  {
                          id: '271',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-10-04'),
    status: 'completed'
  },
  {
            id: '270',
    type: 'received',
    amount: 41.70,
    sender: 'Jana Schlechte',
    description: 'Payment received',
    date: new Date('2025-10-04'),
    status: 'completed'
  },
  {
                      id: '271',
    type: 'payment',
    amount: 27.76,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-10-02'),
    status: 'completed'
  },
  {
        id: '270',
    type: 'received',
    amount: 26.80,
    sender: 'Laura Niewohner',
    description: 'Payment received',
    date: new Date('2025-10-01'),
    status: 'completed'
  },
  {
    id: '271',
    type: 'payment',
    amount: 413.39,
    recipient: 'CMC Tasly Group BV',
    description: 'Business payment',
    date: new Date('2025-09-29'),
    status: 'canceled'
  },
  {                             
    id: '270',
    type: 'received',
    amount: 254.72,
    sender: 'Katja Parschau',
    description: 'Payment received',
    date: new Date('2025-09-29'),
    status: 'completed'
  },
  {
                              id: '270',
    type: 'received',
    amount: 38.00,
    sender: 'Monic Zaumseil',
    description: 'Payment received',
    date: new Date('2025-09-27'),
    status: 'completed'
  },
  {
                          id: '271',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-27'),
    status: 'completed'
  },
  {
                              id: '270',
    type: 'received',
    amount: 72.87,
    sender: 'Nadine Albers',
    description: 'Payment received',
    date: new Date('2025-09-26'),
    status: 'completed'
  },
  {
                      id: '271',
    type: 'payment',
    amount: 18.57,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-25'),
    status: 'completed'
  },
  {
                          id: '270',
    type: 'received',
    amount: 26.85,
    sender: 'Jasmin Radmacher',
    description: 'Payment received',
    date: new Date('2025-09-24'),
    status: 'completed'
  },
  {
                  id: '271',
    type: 'payment',
    amount: 12.38,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-22'),
    status: 'completed'
  },
  {
                      id: '270',
    type: 'received',
    amount: 36.70,
    sender: 'Alexandra Mößner',
    description: 'Payment received',
    date: new Date('2025-09-21'),
    status: 'completed'
  },
  {
                   id: '270',
    type: 'received',
    amount: 45.80,
    sender: 'Martina Lüneberg',
    description: 'Payment received',
    date: new Date('2025-09-21'),
    status: 'completed'
  },
  {
                      id: '270',
    type: 'received',
    amount: 45.80,
    sender: 'Monika Berger',
    description: 'Payment received',
    date: new Date('2025-09-20'),
    status: 'completed'
  },
  {
              id: '271',
    type: 'payment',
    amount: 43.33,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-19'),
    status: 'completed'
  },
  {
                               id: '270',
    type: 'received',
    amount: 33.80,
    sender: 'Sarah Westphal',
    description: 'Payment received',
    date: new Date('2025-09-17'),
    status: 'completed'
  },
  {
                           id: '270',
    type: 'received',
    amount: 83.55,
    sender: 'Vanessa Buß',
    description: 'Payment received',
    date: new Date('2025-09-17'),
    status: 'completed'
  },
  {
                           id: '270',
    type: 'received',
    amount: 26.85,
    sender: 'Sandra Schulze',
    description: 'Payment received',
    date: new Date('2025-09-17'),
    status: 'completed'
  },
  {
                       id: '270',
    type: 'received',
    amount: 26.85,
    sender: 'Carrie Liepelt',
    description: 'Payment received',
    date: new Date('2025-09-17'),
    status: 'completed'
  },
  {
                   id: '270',
    type: 'received',
    amount: 57.80,
    sender: 'Rieke Nordmann',
    description: 'Payment received',
    date: new Date('2025-09-15'),
    status: 'completed'
  },
  {
         id: '270',
    type: 'received',
    amount: 75.80,
    sender: 'Denise Rathkamp',
    description: 'Payment received',
    date: new Date('2025-09-14'),
    status: 'completed'
  },
  {
           id: '270',
    type: 'received',
    amount: 51.80,
    sender: 'Johannes Richter',
    description: 'Payment received',
    date: new Date('2025-09-13'),
    status: 'completed'
  },
  {
          id: '271',
    type: 'payment',
    amount: 12.38,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-12'),
    status: 'completed'
  },
  {
           id: '270',
    type: 'received',
    amount: 76.85,
    sender: 'Mariane Reisler',
    description: 'Payment received',
    date: new Date('2025-09-12'),
    status: 'completed'
  },
  {
        id: '269',
    type: 'received',
    amount: 94.75,
    sender: 'Franz Ix',
    description: 'Payment received',
    date: new Date('2025-09-12'),
    status: 'completed'
  },
  {
       id: '268',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-11'),
    status: 'completed'
  },
  {
      id: '267',
    type: 'received',
    amount: 26.85,
    sender: 'Uta Pohl',
    description: 'Payment received',
    date: new Date('2025-09-11'),
    status: 'completed'
  },
  {
    id: '266',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-11'),
    status: 'completed'
  },
  {
    id: '265',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-11'),
    status: 'completed'
  },
  {
     id: '264',
    type: 'received',
    amount: 45.80,
    sender: 'Caterina Tripodi',
    description: 'Payment received',
    date: new Date('2025-09-11'),
    status: 'completed'
  },
  {
    id: '263',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-11'),
    status: 'completed'
  },
  {
    id: '262',
    type: 'received',
    amount: 45.80,
    sender: 'Larissa Schütze',
    description: 'Payment received',
    date: new Date('2025-09-10'),
    status: 'completed'
  },
  {
    id: '261',
    type: 'payment',
    amount: 7.69,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-10'),
    status: 'completed'
  },
  {
    id: '260',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-10'),
    status: 'completed'
  },
  {
    id: '259',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-10'),
    status: 'completed'
  },
  {
    id: '258',
    type: 'received',
    amount: 64.75,
    sender: 'Simone Bliefernich',
    description: 'Payment received',
    date: new Date('2025-09-10'),
    status: 'completed'
  },
  {
    id: '257',
    type: 'received',
    amount: 64.75,
    sender: 'Andrea Mecky',
    description: 'Payment received',
    date: new Date('2025-09-08'),
    status: 'completed'
  },
  {
    id: '256',
    type: 'payment',
    amount: 10.49,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-08'),
    status: 'completed'
  },
  {
    id: '255',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-08'),
    status: 'completed'
  },
  {
    id: '254',
    type: 'received',
    amount: 75.80,
    sender: 'Anneke Kastner',
    description: 'Payment received',
    date: new Date('2025-09-08'),
    status: 'completed'
  },
  {
    id: '253',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-08'),
    status: 'completed'
  },
  {
    id: '252',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-08'),
    status: 'completed'
  },
  {
    id: '251',
    type: 'received',
    amount: 61.80,
    sender: 'Kristin Sönnichsen',
    description: 'Payment received',
    date: new Date('2025-09-07'),
    status: 'completed'
  },
  {
    id: '250',
    type: 'received',
    amount: 100.40,
    sender: 'Silke Dörnbach',
    description: 'Payment received',
    date: new Date('2025-09-06'),
    status: 'completed'
  },
  {
    id: '249',
    type: 'received',
    amount: 23.80,
    sender: 'Jörg Diestel',
    description: 'Payment received',
    date: new Date('2025-09-05'),
    status: 'completed'
  },
  {
    id: '248',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-05'),
    status: 'completed'
  },
  {
    id: '247',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-05'),
    status: 'completed'
  },
  {
    id: '246',
    type: 'received',
    amount: 69.55,
    sender: 'Jana Schlechte',
    description: 'Payment received',
    date: new Date('2025-09-05'),
    status: 'completed'
  },
  {
    id: '245',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-04'),
    status: 'completed'
  },
  {
    id: '244',
    type: 'received',
    amount: 38.70,
    sender: 'Stephanie Steubl',
    description: 'Payment received',
    date: new Date('2025-09-04'),
    status: 'completed'
  },
  {
    id: '243',
    type: 'payment',
    amount: 18.57,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-04'),
    status: 'completed'
  },
  {
    id: '242',
    type: 'received',
    amount: 79.60,
    sender: 'Pia Rother',
    description: 'Payment received',
    date: new Date('2025-09-04'),
    status: 'completed'
  },
  {
    id: '241',
    type: 'received',
    amount: 39.70,
    sender: 'Kathrin Hasenau',
    description: 'Payment received',
    date: new Date('2025-09-03'),
    status: 'completed'
  },
  {
    id: '240',
    type: 'payment',
    amount: 12.38,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-09-02'),
    status: 'completed'
  },
  {
    id: '239',
    type: 'received',
    amount: 26.85,
    sender: 'Gesa Engel',
    description: 'Payment received',
    date: new Date('2025-08-31'),
    status: 'completed'
  },
  {
    id: '238',
    type: 'received',
    amount: 32.50,
    sender: 'Marcel Braune',
    description: 'Payment received',
    date: new Date('2025-08-29'),
    status: 'completed'
  },
  {
    id: '237',
    type: 'received',
    amount: 32.85,
    sender: 'Minou Cornils',
    description: 'Payment received',
    date: new Date('2025-08-29'),
    status: 'completed'
  },
  {
    id: '236',
    type: 'payment',
    amount: 18.57,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-08-29'),
    status: 'completed'
  },
  {
    id: '235',
    type: 'received',
    amount: 26.85,
    sender: 'Sabrina Keyser',
    description: 'Payment received',
    date: new Date('2025-08-29'),
    status: 'completed'
  },
  {
    id: '234',
    type: 'received',
    amount: 29.75,
    sender: 'Johanna Klapper',
    description: 'Payment received',
    date: new Date('2025-08-28'),
    status: 'completed'
  },
  {
    id: '233',
    type: 'received',
    amount: 61.80,
    sender: 'Christel Owschinski',
    description: 'Payment received',
    date: new Date('2025-08-27'),
    status: 'completed'
  },
  {
    id: '232',
    type: 'payment',
    amount: 43.75,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-08-26'),
    status: 'completed'
  },
  {
    id: '231',
    type: 'received',
    amount: 75.80,
    sender: 'Natalie Kullik',
    description: 'Payment received',
    date: new Date('2025-08-25'),
    status: 'completed'
  },
  {
    id: '230',
    type: 'received',
    amount: 43.65,
    sender: 'Wencke Ettrich',
    description: 'Payment received',
    date: new Date('2025-08-25'),
    status: 'completed'
  },
  {
    id: '229',
    type: 'payment',
    amount: 24.76,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-08-22'),
    status: 'completed'
  },
  {
    id: '228',
    type: 'received',
    amount: 64.75,
    sender: 'Christiane Herrmann',
    description: 'Payment received',
    date: new Date('2025-08-21'),
    status: 'completed'
  },
  {
    id: '227',
    type: 'received',
    amount: 51.80,
    sender: 'Christina Fahrenkrug',
    description: 'Payment received',
    date: new Date('2025-08-21'),
    status: 'completed'
  },
  {
    id: '226',
    type: 'received',
    amount: 145.70,
    sender: 'Ulrike Piening',
    description: 'Payment received',
    date: new Date('2025-08-20'),
    status: 'completed'
  },
  {
    id: '225',
    type: 'received',
    amount: 32.85,
    sender: 'Maike Brockstedt',
    description: 'Payment received',
    date: new Date('2025-08-19'),
    status: 'completed'
  },
  {
    id: '224',
    type: 'payment',
    amount: 30.95,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-08-18'),
    status: 'completed'
  },
  {
    id: '223',
    type: 'received',
    amount: 26.85,
    sender: 'Jasmin Radmacher',
    description: 'Payment received',
    date: new Date('2025-08-17'),
    status: 'completed'
  },
  {
    id: '222',
    type: 'received',
    amount: 26.85,
    sender: 'Nadine Winkler',
    description: 'Payment received',
    date: new Date('2025-08-17'),
    status: 'completed'
  },
  {
    id: '221',
    type: 'received',
    amount: 61.75,
    sender: 'Peggy Möller',
    description: 'Payment received',
    date: new Date('2025-08-17'),
    status: 'completed'
  },
  {
    id: '220',
    type: 'received',
    amount: 64.75,
    sender: 'Ulrike Piening',
    description: 'Payment received',
    date: new Date('2025-08-17'),
    status: 'completed'
  },
  {
    id: '219',
    type: 'received',
    amount: 71.60,
    sender: 'Tanja Milich',
    description: 'Payment received',
    date: new Date('2025-08-16'),
    status: 'completed'
  },
  {
    id: '218',
    type: 'payment',
    amount: 12.88,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-08-16'),
    status: 'completed'
  },
  {
    id: '217',
    type: 'received',
    amount: 26.85,
    sender: 'Martina Lorenzen',
    description: 'Payment received',
    date: new Date('2025-08-14'),
    status: 'completed'
  },
  {
    id: '216',
    type: 'payment',
    amount: 37.14,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-08-14'),
    status: 'completed'
  },
  {
    id: '215',
    type: 'received',
    amount: 57.80,
    sender: 'Carmen Lohn',
    description: 'Payment received',
    date: new Date('2025-08-13'),
    status: 'completed'
  },
  {
    id: '214',
    type: 'payment',
    amount: 83.25,
    recipient: 'CMC Tasly Group BV',
    description: 'Business payment',
    date: new Date('2025-08-13'),
    status: 'canceled'
  },
  {
    id: '213',
    type: 'received',
    amount: 61.80,
    sender: 'Marit Heinzmann',
    description: 'Payment received',
    date: new Date('2025-08-13'),
    status: 'completed'
  },
  {
    id: '212',
    type: 'received',
    amount: 26.85,
    sender: 'Franz Ix',
    description: 'Payment received',
    date: new Date('2025-08-12'),
    status: 'completed'
  },
  {
    id: '211',
    type: 'payment',
    amount: 330.14,
    recipient: 'CMC Tasly Group BV',
    description: 'Business payment',
    date: new Date('2025-08-12'),
    status: 'canceled'
  },
  {
    id: '210',
    type: 'received',
    amount: 61.80,
    sender: 'Birte Hansen',
    description: 'Payment received',
    date: new Date('2025-08-12'),
    status: 'completed'
  },
  {
    id: '209',
    type: 'received',
    amount: 44.70,
    sender: 'Annika Zimmek',
    description: 'Payment received',
    date: new Date('2025-08-11'),
    status: 'completed'
  },
  {
    id: '208',
    type: 'received',
    amount: 75.80,
    sender: 'Kerstin Laabs',
    description: 'Payment received',
    date: new Date('2025-08-11'),
    status: 'completed'
  },
  {
    id: '207',
    type: 'received',
    amount: 4.50,
    sender: 'Josy Hohberg',
    description: 'Payment received',
    date: new Date('2025-08-10'),
    status: 'completed'
  },
  {
    id: '206',
    type: 'received',
    amount: 21.50,
    sender: 'Josy Hohberg',
    description: 'Payment received',
    date: new Date('2025-08-10'),
    status: 'completed'
  },
  {
    id: '205',
    type: 'payment',
    amount: 12.38,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-08-08'),
    status: 'completed'
  },
  {
    id: '204',
    type: 'received',
    amount: 77.65,
    sender: 'Jana Schlechte',
    description: 'Payment received',
    date: new Date('2025-08-08'),
    status: 'completed'
  },
  {
    id: '203',
    type: 'received',
    amount: 26.85,
    sender: 'Regina Richter',
    description: 'Payment received',
    date: new Date('2025-08-07'),
    status: 'completed'
  },
  {
    id: '202',
    type: 'payment',
    amount: 12.38,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-08-07'),
    status: 'completed'
  },
  {
    id: '201',
    type: 'received',
    amount: 34.85,
    sender: 'Isabell Feinauer-Frenz',
    description: 'Payment received',
    date: new Date('2025-08-07'),
    status: 'completed'
  },
  {
    id: '200',
    type: 'received',
    amount: 50.70,
    sender: 'Isabelle Meyer',
    description: 'Payment received',
    date: new Date('2025-08-07'),
    status: 'completed'
  },
  {
    id: '199',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-08-04'),
    status: 'completed'
  },
  {
    id: '198',
    type: 'received',
    amount: 61.80,
    sender: 'Britta Janssen',
    description: 'Payment received',
    date: new Date('2025-08-04'),
    status: 'completed'
  },
  {
    id: '197',
    type: 'payment',
    amount: 20.07,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-08-04'),
    status: 'completed'
  },
  {
    id: '196',
    type: 'received',
    amount: 45.80,
    sender: 'Kinga Schobert',
    description: 'Payment received',
    date: new Date('2025-08-04'),
    status: 'completed'
  },
  {
    id: '195',
    type: 'received',
    amount: 64.75,
    sender: 'Simone Bliedernich',
    description: 'Payment received',
    date: new Date('2025-08-04'),
    status: 'completed'
  },
  {
    id: '194',
    type: 'received',
    amount: 77.50,
    sender: 'Svenja Garbrecht',
    description: 'Payment received',
    date: new Date('2025-08-02'),
    status: 'completed'
  },
  {
    id: '193',
    type: 'payment',
    amount: 7.69,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-31'),
    status: 'completed'
  },
  {
    id: '192',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-31'),
    status: 'completed'
  },
  {
    id: '191',
    type: 'received',
    amount: 41.38,
    sender: 'Sandra Valentin',
    description: 'Payment received',
    date: new Date('2025-07-31'),
    status: 'completed'
  },
  {
    id: '190',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-29'),
    status: 'completed'
  },
  {
    id: '189',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-29'),
    status: 'completed'
  },
  {
    id: '188',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-29'),
    status: 'completed'
  },
  {
    id: '187',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-29'),
    status: 'completed'
  },
  {
    id: '186',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-29'),
    status: 'completed'
  },
  {
    id: '185',
    type: 'received',
    amount: 45.80,
    sender: 'Eires Wunderwelt',
    description: 'Payment received',
    date: new Date('2025-07-29'),
    status: 'completed'
  },
  {
    id: '184',
    type: 'received',
    amount: 26.85,
    sender: 'Carrie Liepelt',
    description: 'Payment received',
    date: new Date('2025-07-29'),
    status: 'completed'
  },
  {
    id: '183',
    type: 'received',
    amount: 26.85,
    sender: 'Manuela Helms',
    description: 'Payment received',
    date: new Date('2025-07-29'),
    status: 'completed'
  },
  {
    id: '182',
    type: 'received',
    amount: 47.80,
    sender: 'Virginia Weicherding',
    description: 'Payment received',
    date: new Date('2025-07-29'),
    status: 'completed'
  },
  {
    id: '181',
    type: 'received',
    amount: 24.57,
    sender: 'Miriam Mittelstaedt',
    description: 'Payment received',
    date: new Date('2025-07-27'),
    status: 'completed'
  },
  {
    id: '180',
    type: 'received',
    amount: 43.89,
    sender: 'Fiete Fölster',
    description: 'Payment received',
    date: new Date('2025-07-27'),
    status: 'completed'
  },
  {
    id: '179',
    type: 'payment',
    amount: 20.07,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-26'),
    status: 'completed'
  },
  {
    id: '178',
    type: 'received',
    amount: 26.85,
    sender: 'Jasmin Radmacher',
    description: 'Payment received',
    date: new Date('2025-07-25'),
    status: 'completed'
  },
  {
    id: '177',
    type: 'received',
    amount: 21.85,
    sender: 'Georg Mittag',
    description: 'Payment received',
    date: new Date('2025-07-25'),
    status: 'completed'
  },
  {
    id: '176',
    type: 'received',
    amount: 78.65,
    sender: 'Heike Budeweit',
    description: 'Payment received',
    date: new Date('2025-07-25'),
    status: 'completed'
  },
  {
    id: '175',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-25'),
    status: 'completed'
  },
  {
    id: '174',
    type: 'sent',
    amount: 45.80,
    recipient: 'Lisa Garhammer',
    description: 'Refund',
    date: new Date('2025-07-23'),
    status: 'completed'
  },
  {
    id: '173',
    type: 'received',
    amount: 45.80,
    sender: 'Lisa Garhammer',
    description: 'Payment received',
    date: new Date('2025-07-21'),
    status: 'completed'
  },
  {
    id: '172',
    type: 'received',
    amount: 28.75,
    sender: 'Tamara Berghammer',
    description: 'Payment received',
    date: new Date('2025-07-19'),
    status: 'completed'
  },
  {
    id: '171',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-19'),
    status: 'completed'
  },
  {
    id: '170',
    type: 'received',
    amount: 32.85,
    sender: 'Eileen Petersen',
    description: 'Payment received',
    date: new Date('2025-07-18'),
    status: 'completed'
  },
  {
    id: '169',
    type: 'payment',
    amount: 30.95,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-15'),
    status: 'completed'
  },
  {
    id: '168',
    type: 'received',
    amount: 30.32,
    sender: 'Frank Dittel',
    description: 'Payment received',
    date: new Date('2025-07-13'),
    status: 'completed'
  },
  {
    id: '167',
    type: 'received',
    amount: 40.20,
    sender: 'Rita Thomsen',
    description: 'Payment received',
    date: new Date('2025-07-13'),
    status: 'completed'
  },
  {
    id: '166',
    type: 'sent',
    amount: 26.85,
    recipient: 'Ilka Hofacker',
    description: 'Refund',
    date: new Date('2025-06-11'),
    status: 'completed'
  },
  {
    id: '165',
    type: 'received',
    amount: 26.85,
    sender: 'Sabrina Weinerth',
    description: 'Payment received',
    date: new Date('2025-07-11'),
    status: 'completed'
  },
  {
    id: '164',
    type: 'payment',
    amount: 12.38,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-10'),
    status: 'completed'
  },
  {
    id: '163',
    type: 'received',
    amount: 54.75,
    sender: 'Linda Riemer',
    description: 'Payment received',
    date: new Date('2025-07-09'),
    status: 'completed'
  },
  {
    id: '162',
    type: 'received',
    amount: 75.80,
    sender: 'Anneke Kastner',
    description: 'Payment received',
    date: new Date('2025-07-08'),
    status: 'completed'
  },
  {
    id: '161',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-06'),
    status: 'completed'
  },
  {
    id: '160',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-06'),
    status: 'completed'
  },
  {
    id: '159',
    type: 'received',
    amount: 64.75,
    sender: 'Marleen Traeger',
    description: 'Payment received',
    date: new Date('2025-07-06'),
    status: 'completed'
  },
  {
    id: '158',
    type: 'received',
    amount: 26.85,
    sender: 'Stefanie Groß',
    description: 'Payment received',
    date: new Date('2025-07-04'),
    status: 'completed'
  },
  {
    id: '157',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-07-02'),
    status: 'completed'
  },
  {
    id: '156',
    type: 'received',
    amount: 26.85,
    sender: 'Steve Leukert',
    description: 'Payment received',
    date: new Date('2025-06-30'),
    status: 'completed'
  },
  {
    id: '155',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-06-27'),
    status: 'completed'
  },
  {
    id: '154',
    type: 'received',
    amount: 39.70,
    sender: 'Jasmin Fockenbrock',
    description: 'Payment received',
    date: new Date('2025-06-26'),
    status: 'completed'
  },
  {
    id: '153',
    type: 'payment',
    amount: 7.69,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-06-26'),
    status: 'completed'
  },
  {
    id: '152',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-06-26'),
    status: 'completed'
  },
  {
    id: '151',
    type: 'received',
    amount: 106.25,
    sender: 'Heike Budeweit',
    description: 'Payment received',
    date: new Date('2025-06-25'),
    status: 'completed'
  },
  {
    id: '150',
    type: 'payment',
    amount: 12.38,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-06-17'),
    status: 'completed'
  },
  {
    id: '149',
    type: 'received',
    amount: 34.25,
    sender: 'Sebastian Seeboth',
    description: 'Payment received',
    date: new Date('2025-06-17'),
    status: 'completed'
  },
  {
    id: '148',
    type: 'received',
    amount: 55.65,
    sender: 'Jeanette Heim',
    description: 'Payment received',
    date: new Date('2025-06-15'),
    status: 'completed'
  },
  {
    id: '147',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-06-13'),
    status: 'completed'
  },
  {
    id: '146',
    type: 'received',
    amount: 39.93,
    sender: 'Anja Schnur',
    description: 'Payment received',
    date: new Date('2025-06-13'),
    status: 'completed'
  },
  {
    id: '145',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-06-13'),
    status: 'completed'
  },
  {
    id: '144',
    type: 'received',
    amount: 77.80,
    sender: 'Pascale Lange-Borzym',
    description: 'Payment received',
    date: new Date('2025-06-13'),
    status: 'completed'
  },
  {
    id: '143',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-06-12'),
    status: 'completed'
  },
  {
    id: '142',
    type: 'received',
    amount: 23.80,
    sender: 'Nora Kowalke',
    description: 'Payment received',
    date: new Date('2025-06-11'),
    status: 'completed'
  },
  {
    id: '141',
    type: 'payment',
    amount: 18.57,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-06-11'),
    status: 'completed'
  },
  {
    id: '140',
    type: 'received',
    amount: 75.80,
    sender: 'Nadine Albers',
    description: 'Payment received',
    date: new Date('2025-06-11'),
    status: 'completed'
  },
  {
    id: '139',
    type: 'received',
    amount: 26.85,
    sender: 'Marleen Traeger',
    description: 'Payment received',
    date: new Date('2025-06-10'),
    status: 'completed'
  },
  {
    id: '138',
    type: 'received',
    amount: 30.32,
    sender: 'Frank Dittel',
    description: 'Payment received',
    date: new Date('2025-06-08'),
    status: 'completed'
  },
  {
    id: '137',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-06-07'),
    status: 'completed'
  },
  {
    id: '136',
    type: 'received',
    amount: 29.80,
    sender: 'Sophie Lude',
    description: 'Payment received',
    date: new Date('2025-06-07'),
    status: 'completed'
  },
  {
    id: '135',
    type: 'payment',
    amount: 7.69,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-06-06'),
    status: 'completed'
  },
  {
    id: '134',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-06-06'),
    status: 'completed'
  },
  {
    id: '133',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-06-06'),
    status: 'completed'
  },
  {
    id: '132',
    type: 'received',
    amount: 63.02,
    sender: 'Tanja Milich',
    description: 'Payment received',
    date: new Date('2025-06-05'),
    status: 'completed'
  },
  {
    id: '131',
    type: 'received',
    amount: 73.55,
    sender: 'Heike Budeweit',
    description: 'Payment received',
    date: new Date('2025-06-05'),
    status: 'completed'
  },
  {
    id: '130',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-06-04'),
    status: 'completed'
  },
  {
    id: '129',
    type: 'received',
    amount: 23.80,
    sender: 'Melanie Beyermann',
    description: 'Payment received',
    date: new Date('2025-06-04'),
    status: 'completed'
  },
  {
    id: '128',
    type: 'payment',
    amount: 20.07,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-06-03'),
    status: 'completed'
  },
  {
    id: '127',
    type: 'received',
    amount: 440.00,
    sender: 'Billiger Mietwagen',
    description: 'Payment received',
    date: new Date('2025-06-02'),
    status: 'completed'
  },
  {
    id: '126',
    type: 'received',
    amount: 103.78,
    sender: 'Tordis Staack',
    description: 'Payment received',
    date: new Date('2025-06-01'),
    status: 'completed'
  },
  {
    id: '125',
    type: 'received',
    amount: 25.59,
    sender: 'Ilka Hofacker',
    description: 'Payment received',
    date: new Date('2025-05-30'),
    status: 'completed'
  },
  {
    id: '124',
    type: 'received',
    amount: 75.48,
    sender: 'Jana Schlechte',
    description: 'Payment received',
    date: new Date('2025-05-30'),
    status: 'completed'
  },
  {
    id: '123',
    type: 'payment',
    amount: 7.69,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-05-30'),
    status: 'completed'
  },
  {
    id: '122',
    type: 'received',
    amount: 61.18,
    sender: 'Peggy Möller',
    description: 'Payment received',
    date: new Date('2025-05-30'),
    status: 'completed'
  },
  {
    id: '121',
    type: 'payment',
    amount: 18.57,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-05-30'),
    status: 'completed'
  },
  {
    id: '120',
    type: 'received',
    amount: 43.89,
    sender: 'Fiete Fölster',
    description: 'Payment received',
    date: new Date('2025-05-27'),
    status: 'completed'
  },
  {
    id: '119',
    type: 'received',
    amount: 26.85,
    sender: 'Bettina Berger',
    description: 'Payment received',
    date: new Date('2025-05-26'),
    status: 'completed'
  },
  {
    id: '118',
    type: 'received',
    amount: 25.49,
    sender: 'Jasmin Radmacher',
    description: 'Payment received',
    date: new Date('2025-05-24'),
    status: 'completed'
  },
  {
    id: '117',
    type: 'received',
    amount: 91.18,
    sender: 'Franz Ix',
    description: 'Payment received',
    date: new Date('2025-05-24'),
    status: 'completed'
  },
  {
    id: '116',
    type: 'sent',
    amount: 31.20,
    recipient: 'Iris Alexander',
    description: 'Refund',
    date: new Date('2025-05-22'),
    status: 'completed'
  },
  {
    id: '115',
    type: 'received',
    amount: 76.85,
    sender: 'Nadine Dech',
    description: 'Payment received',
    date: new Date('2025-05-22'),
    status: 'completed'
  },
  {
    id: '114',
    type: 'received',
    amount: 51.80,
    sender: 'Carmen Lohn',
    description: 'Payment received',
    date: new Date('2025-05-21'),
    status: 'completed'
  },
  {
    id: '113',
    type: 'received',
    amount: 75.80,
    sender: 'Hanna Kokott',
    description: 'Payment received',
    date: new Date('2025-05-21'),
    status: 'completed'
  },
  {
    id: '112',
    type: 'received',
    amount: 31.18,
    sender: 'Katharina Hoffmann',
    description: 'Payment received',
    date: new Date('2025-05-20'),
    status: 'completed'
  },
  {
    id: '111',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-05-17'),
    status: 'completed'
  },
  {
    id: '110',
    type: 'received',
    amount: 59.35,
    sender: 'Tordis Staack',
    description: 'Payment received',
    date: new Date('2025-05-16'),
    status: 'completed'
  },
  {
    id: '109',
    type: 'payment',
    amount: 7.69,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-05-16'),
    status: 'completed'
  },
  {
    id: '108',
    type: 'received',
    amount: 26.85,
    sender: 'Carrie Liepelt',
    description: 'Payment received',
    date: new Date('2025-05-12'),
    status: 'completed'
  },
  {
    id: '107',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-05-12'),
    status: 'completed'
  },
  {
    id: '106',
    type: 'received',
    amount: 46.31,
    sender: 'Mona Ursula Plieninger',
    description: 'Payment received',
    date: new Date('2025-05-09'),
    status: 'completed'
  },
  {
    id: '105',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-05-09'),
    status: 'completed'
  },
  {
    id: '104',
    type: 'received',
    amount: 6.19,
    sender: 'PayPal',
    description: 'Refund',
    date: new Date('2025-05-09'),
    status: 'completed'
  },
  {
    id: '103',
    type: 'received',
    amount: 54.62,
    sender: 'Jana-Madlen Brügmann',
    description: 'Payment received',
    date: new Date('2025-05-08'),
    status: 'completed'
  },
  {
    id: '102',
    type: 'received',
    amount: 33.32,
    sender: 'Britta Janßen',
    description: 'Payment received',
    date: new Date('2025-05-08'),
    status: 'completed'
  },
  {
    id: '101',
    type: 'payment',
    amount: 6.19,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-05-06'),
    status: 'completed'
  },
  {
    id: '100',
    type: 'received',
    amount: 6.19,
    sender: 'PayPal',
    description: 'Refund',
    date: new Date('2025-05-06'),
    status: 'completed'
  },
  {
    id: '99',
    type: 'received',
    amount: 34.72,
    sender: 'Stefanie Ghassemieh',
    description: 'Payment received',
    date: new Date('2025-05-05'),
    status: 'completed'
  },
  {
    id: '98',
    type: 'received',
    amount: 57.13,
    sender: 'Anja Breiding',
    description: 'Payment received',
    date: new Date('2025-05-04'),
    status: 'completed'
  },
  {
    id: '97',
    type: 'payment',
    amount: 19.06,
    recipient: 'Fastspring BV',
    description: 'Service fee',
    date: new Date('2025-05-04'),
    status: 'completed'
  },
  {
    id: '96',
    type: 'received',
    amount: 19.06,
    sender: 'PayPal',
    description: 'Refund',
    date: new Date('2025-05-04'),
    status: 'completed'
  },
  {
    id: '95',
    type: 'received',
    amount: 25.59,
    sender: 'Gesa Engel',
    description: 'Payment received',
    date: new Date('2025-05-03'),
    status: 'completed'
  },
  {
    id: '94',
    type: 'payment',
    amount: 7.69,
    recipient: 'Deutsche Post AG',
    description: 'Shipping fee',
    date: new Date('2025-05-01'),
    status: 'completed'
  },
  {
    id: '93',
    type: 'received',
    amount: 7.69,
    sender: 'PayPal',
    description: 'Refund',
    date: new Date('2025-05-01'),
    status: 'completed'
  }
];

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);

  const addTransaction = (transaction: Omit<Transaction, 'id' | 'date'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
      date: new Date()
    };
    setTransactions(prev => [newTransaction, ...prev]);
  };

  const updateTransaction = (id: string, updatedTransaction: Partial<Transaction>) => {
    setTransactions(prev =>
      prev.map(transaction =>
        transaction.id === id
          ? { ...transaction, ...updatedTransaction }
          : transaction
      )
    );
  };

  const deleteTransaction = (id: string) => {
    setTransactions(prev => prev.filter(transaction => transaction.id !== id));
  };

  const value: TransactionContextType = {
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = (): TransactionContextType => {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error('useTransactions must be used within a TransactionProvider');
  }
  return context;
};
