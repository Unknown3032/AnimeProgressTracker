'use client';

export default function FeedLayout({ children, leftSidebar, rightSidebar }) {
  return (
    <section
      style={{
        padding: '80px 32px',
        backgroundColor: '#000000',
        borderTop: '1px solid #262626',
      }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar */}
          {leftSidebar && (
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky" style={{ top: '120px' }}>
                {leftSidebar}
              </div>
            </aside>
          )}

          {/* Main Feed */}
          <main className={leftSidebar && rightSidebar ? 'lg:col-span-6' : leftSidebar || rightSidebar ? 'lg:col-span-9' : 'lg:col-span-12'}>
            {children}
          </main>

          {/* Right Sidebar */}
          {rightSidebar && (
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky" style={{ top: '120px' }}>
                {rightSidebar}
              </div>
            </aside>
          )}

        </div>
      </div>
    </section>
  );
}