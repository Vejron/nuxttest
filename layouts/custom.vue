<template>
  <div class="px-6 py-6 max-w-7xl mx-auto min-h-screen">
    <header class="font-black  text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-amber-300 to-green-300 mb-6"><slot name="header"></slot></header>
    <main>
      <slot></slot>  
    </main>
    <footer></footer>
  </div>
</template>