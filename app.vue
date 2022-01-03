<template>
  <Html lang="sv">
    <Head>
      <Title>Skidspår i umeå</Title>
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <Meta name="msapplication-TileColor" content="#da532c" />
      <Meta name="theme-color" content="#ffffff" />
      <Meta
        name="description"
        content="Spårinformation och status för umeå med omnejd"
      />
    </Head>
  </Html>
  <div class="bg-dark-300 text-light-100">
    <NuxtPage />
  </div>
</template>
