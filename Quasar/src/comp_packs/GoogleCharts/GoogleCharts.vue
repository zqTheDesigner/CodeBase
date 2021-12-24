<template>
  <div>
    Test

    <google-chart
      data='[["Month", "Days"], ["Jan", 31]]'
      type='pie'
      :options='{"title": "Distribution of days in 2001Q1"}'
    ></google-chart>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
