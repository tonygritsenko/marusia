<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink class="header__link">
          <NuxtImg src="logo.png" />
        </NuxtLink>
        <nav class="header__nav">
          <NuxtLink to="/" class="header__nav-link">Home</NuxtLink>
          <NuxtLink class="header__nav-link">Genres</NuxtLink>
        </nav>

        <input type="text" placeholder="Поиск" class="header__search" />
        <button class="header__button">Login</button>
      </div>
    </div>
  </header>
</template>

<style src="./Header.less" lang="less" />
