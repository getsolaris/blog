import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/feed.xml",
      permanent: true,
    },
  }
}

export default function Feed() {
  return null
} 