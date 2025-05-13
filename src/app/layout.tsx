import type { Metadata } from 'next';
import './globals.css';
import { MainBodyContainer, MainContainer, MainTodoPageContainer } from '@/style/layout/layout';
import MainHeader from '@/components/ui/layout/MainHeader';
import MainSidebar from '@/components/ui/layout/MainSidebar';

export const metadata: Metadata = {
  title: 'Todo app',
  description: 'NextJSでTodoリスト作成',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <MainContainer>
          <MainHeader />
          <MainBodyContainer>
            <MainSidebar />
            <MainTodoPageContainer>{children}</MainTodoPageContainer>
          </MainBodyContainer>
        </MainContainer>
      </body>
    </html>
  );
}
