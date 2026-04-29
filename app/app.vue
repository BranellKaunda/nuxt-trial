<script setup>
const count = useCounter();
console.log(count);

names.value.push("messi");
</script>

<template>
  <div>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/matches">Matches</NuxtLink></li>
        <li><NuxtLink to="/teams">Teams</NuxtLink></li>
        <li><NuxtLink to="/leagues">Leagues</NuxtLink></li>
      </ul>
    </nav>

    <NuxtPage />
  </div>
</template>
