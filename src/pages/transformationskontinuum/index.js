// pages/transformationskontinuum/index.js

export default function TransformationskontinuumIndex() {
  return null
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  }
}