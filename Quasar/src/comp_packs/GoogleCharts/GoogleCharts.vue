<template>
  <div>
    <google-chart
      data='[["Month", "Days"], ["Jan", 31],["Feb", 12]]'
      type="line"
      :options="{ title: 'Distribution of days in 2001Q1' }"
    ></google-chart>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
