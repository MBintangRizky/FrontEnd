import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Breadcrumbs } from "@material-tailwind/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function BreadcrumbsWithIcon({ links }) {
  return (
    <Breadcrumbs className='bg-white shadow'>
      <a href='#' className='opacity-60'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4'
          viewBox='0 0 20 20'
          fill='currentColor'>
          <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
        </svg>
      </a>
      {links.map((link) => (
        <a href={link.href} className='opacity-60'>
          <span>{link.name}</span>
        </a>
      ))}
    </Breadcrumbs>
  );
}

export function BreadcrumbsWithoutIcon({ links }) {
  return (
    <>
      <div className='flex gap-3'>
        {links.map((el, i) => {
          return (
            <div className='flex gap-3' key={i}>
              <a href={el.href} className='text-xl'>
                {el.name}
              </a>
              {el.show_chevron === true && (
                <ChevronRight className='self-center' />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
