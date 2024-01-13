import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import { Button } from './ui/button'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export default function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>
      <PaginationRoot>
        <PaginationContent>
          <div className="flex items-center gap-x-6 lg:space-x-8">
            <div className="flex w-[100px] items-center justify-center text-sm font-medium">
              Página {pageIndex + 1} de {pages}
            </div>
            <div className="flex items-center space-x-2">
              <PaginationLink className="h-8 w-8 p-0">
                <ChevronsLeft className="h-4 w-4" />
                <span className="sr-only">Primeira página</span>
              </PaginationLink>

              <PaginationPrevious className="h-8 w-8 p-0" />
              <PaginationNext className="h-8 w-8 p-0" />

              <PaginationLink className="h-8 w-8 p-0">
                <ChevronsRight className="h-4 w-4" />
                <span className="sr-only">Ultima página</span>
              </PaginationLink>
            </div>
          </div>
        </PaginationContent>
      </PaginationRoot>
    </div>
  )
}
