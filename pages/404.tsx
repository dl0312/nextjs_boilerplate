import React, { ReactElement } from 'react'

import { Button, Result } from 'antd'
import { useRouter } from 'next/router'

import Layout from '@/components/common/Layout'

function NotFoundPage(): ReactElement {
  const { push } = useRouter()

  const backHome = () => {
    push('/')
  }

  return (
    <Layout>
      <Result
        status={'404'}
        title={404}
        subTitle="죄송합니다, 방문해주신 페이지가 존재하지 않습니다."
        extra={
          <Button onClick={backHome} type="primary">
            홈으로 가기
          </Button>
        }
      />
    </Layout>
  )
}
export default NotFoundPage
