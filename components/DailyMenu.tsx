'use client';

import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DailyMenu() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      const scrollY = window.scrollY;
      document.body.dataset.scroll = String(scrollY);
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = document.body.dataset.scroll;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      delete document.body.dataset.scroll;
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10));
      }
    }
    return () => {
      const scrollY = document.body.dataset.scroll;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      delete document.body.dataset.scroll;
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10));
      }