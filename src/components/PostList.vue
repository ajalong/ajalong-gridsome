<template>
  <div class="p6-6 bg-black">
    <div class="relative mb-2">
      <g-link :to="post.path">
        <div class="bg-gray-900 pb-1/1 sm:pb-3/5 overflow-hidden">
          <g-image class="absolute h-full w-full object-cover" src="~/assets/ovsi.png" />
          <div class="opacity-0 hover:opacity-100 absolute h-full w-full">
            <div class="absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-black">
              <div class="absolute z-10 m-4 sm:m-8 bottom-0 text-gray-600 max-w-lg">
                <p class="sm:mb-1">post.type</p>
                <p class="hidden sm:inline text-xl text-white leading-snug">post.description</p>
              </div>
            </div>
          </div>
        </div>
      </g-link>
    </div>
  </div>
</template>



