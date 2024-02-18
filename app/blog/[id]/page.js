import { getAllPostIds, getPostData } from "@/lib/posts"

export async function generateStaticParams() {
    const allIds = getAllPostIds();
    return allIds
}


async function getData(id) {
    const postContent = await getPostData(id);
    return postContent
}

export default async function Page({ params }) {
    const postContent = await getData(params.id);
    return (
        <div>
            <div>My Post: {params.id}</div>
            <h1>
                {postContent.title}
            </h1>
            <br />
            <div dangerouslySetInnerHTML={{ __html: postContent.contentHtml }} />
        </div>
    )
}