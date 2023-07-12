import React, { ReactElement, ReactNode } from 'react'

import { APPLICATION_NAME } from '@/constants/config'

import Footer from './Footer'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props): ReactElement {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="max-w-screen-lg w-full mx-auto my-0 min-h-screen flex flex-col items-center justify-between">
        <div>
          <div className="sticky z-10 top-0 flex flex-col items-center justify-between w-full">
            <div className="flex justify-between items-center w-full p-4">
              <div className="text-xl font-bold">{APPLICATION_NAME}</div>
            </div>
          </div>
          <main className="w-full p-4 flex flex-col items-center">{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
