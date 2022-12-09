<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark mb-3">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" :active="$route.name == 'home'" to="/"
          >All posts</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/create">Create new</router-link>
      </li>
    </ul>
  </nav>
  <router-view class="container" />
</template>

<style></style>
