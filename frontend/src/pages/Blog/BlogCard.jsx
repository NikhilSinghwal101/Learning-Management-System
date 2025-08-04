export default function BlogCard({ id, coverImg, tag, category, title, desc }) {
  return (
    <>
      <div className="overflow-hidden cursor-pointer shadow-lg hover:scale-105 md:mb-4 mb-8 border-[1px] border-slate-300 rounded-xl">
        <img src={coverImg} alt="coverImg" className="h-52 w-full" />
        <div className="mx-8 text-center">
          <h3 className="text-sm uppercase mt-2 mb-2 text-green-700 shadow-md tracking-[2px] bg-slate-100 rounded-full">
            {tag}
          </h3>
          <h1 className="text-2xl my-0 font-semibold min-h-[70px] line-clamp-2">
            {title}
          </h1>
          <p
            className="mt-0 mb-4 line-clamp-4 min-h-24"
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
          />
        </div>
      </div>
    </>
  );
}
