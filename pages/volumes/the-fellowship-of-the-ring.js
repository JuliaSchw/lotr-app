import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

function TheFellowshipOfTheRing() {
  const book = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <ul>
        {book.books.map((bookTitle) => (
          <li key={bookTitle.ordinal}>
            <strong>{bookTitle.ordinal}:</strong> <br></br>
            {bookTitle.title}
          </li>
        ))}
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        width={140}
        height={230}
        alt="book cover of The Fellowship of the Ring"
      ></Image>
      <Link href="/volumes">
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default TheFellowshipOfTheRing;
