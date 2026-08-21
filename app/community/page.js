import CommunityHero from '@/components/community/CommunityHero';
import FeedLayout from '@/components/community/FeedLayout';
import CommunityFeed from '@/components/community/CommunityFeed';
import FilterSidebar from '@/components/community/FilterSidebar';
import TopMembersSidebar from '@/components/community/TopMembersSidebar';
import { samplePosts } from '@/lib/samplePosts';

export const metadata = {
  title: 'Community - Grow Together',
  description: 'Join our community of 100K+ members sharing their growth journey.',
};

export default function CommunityPage() {
  return (
    <main style={{ backgroundColor: '#000000' }}>
      <CommunityHero />
      
      <FeedLayout
        leftSidebar={<FilterSidebar />}
        rightSidebar={<TopMembersSidebar />}
      >
        <CommunityFeed initialPosts={samplePosts} />
      </FeedLayout>
    </main>
  );
}