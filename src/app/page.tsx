import Counter from "@/components/Counter";
import PostsList from "@/components/PostsList";

function HomePage() {
  return (
    <section className="px-5 sm:px-0 pt-10">
      <div className="container mx-auto flex flex-col gap-10">
        <Counter />
        <PostsList />
      </div>
    </section>
  );
}

export default HomePage;
