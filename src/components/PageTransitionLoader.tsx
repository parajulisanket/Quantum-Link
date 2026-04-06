"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

type LoaderContextType = {
  startLoading: () => void;
  stopLoading: () => void;
};

const LoaderContext = createContext<LoaderContextType>({
  startLoading: () => {},
  stopLoading: () => {},
});

export function usePageLoader() {
  return useContext(LoaderContext);
}

export default function PageTransitionLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [pathname]);
  return (
    <LoaderContext.Provider value={{ startLoading, stopLoading }}>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b1220]">
          <div className="relative flex flex-col items-center">
            <div className="absolute h-28 w-28 rounded-full bg-[#ff8a00]/20 blur-3xl" />
            <div className="relative flex items-center justify-center">
              <div className="absolute h-20 w-20 animate-ping rounded-full bg-[#ff8a00]/20" />
              <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#ffd34d]/20 border-t-[#ff8a00]" />
            </div>
            <p className="mt-5 font-[var(--font-heading)] text-2xl font-semibold tracking-wide text-white">
              LOADING...
            </p>
          </div>
        </div>
      )}

      {children}
    </LoaderContext.Provider>
  );
}

type LoadingLinkProps = React.ComponentProps<typeof Link>;

export function LoadingLink({ onClick, href, ...props }: LoadingLinkProps) {
  const { startLoading } = usePageLoader();
  const pathname = usePathname();

  return (
    <Link
      href={href}
      {...props}
      onClick={(e) => {
        const targetHref =
          typeof href === "string" ? href : href.pathname || "";

        if (targetHref && targetHref !== pathname) {
          startLoading();
        }

        onClick?.(e);
      }}
    />
  );
}
