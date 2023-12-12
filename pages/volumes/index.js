import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <h2>All volumes</h2>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ title, slug }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
