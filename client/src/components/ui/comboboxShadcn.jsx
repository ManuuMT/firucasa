'use client';

import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ButtonShadcn } from '@/components/ui/buttonShadcn';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export function ComboboxShadcn({
  data,
  selectText,
  noResultsText,
  searchText,
  setChanges,
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <ButtonShadcn
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'
        >
          {value
            ? data.find(
                item => item.value.toLowerCase() === value.toLowerCase(),
              )?.label
            : selectText}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </ButtonShadcn>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder={searchText} />
          <CommandEmpty>{noResultsText}</CommandEmpty>
          <CommandGroup>
            {data.map(item => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={currentValue => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                  setChanges(currentValue);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === item.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
