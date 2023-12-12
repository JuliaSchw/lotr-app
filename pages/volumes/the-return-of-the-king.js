import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";

function TheReturnOfTheKing() {
  const book = volumes.find(({ slug }) => slug === "the-return-of-the-king");
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
        src="/images/the-return-of-the-king"
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

export default TheReturnOfTheKing;
