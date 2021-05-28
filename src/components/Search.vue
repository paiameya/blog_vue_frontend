<template>
  <form action="/" class="form-group mb-4">
    <div class="form-outer">
      <div class="input-group">
        <input class="search-box" placeholder="Enter a domain" type="text" />
        <div class="input-group-prepend">
          <button type="submit" class="btn btn-secondary rounded-right">
            Analyze domain
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {}
</script>
<style>
.form-outer {
  display: flex;
  flex-direction: row;
  justify-content: center !important;
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}
.input-group .form-control:not(:last-child) {
  border-right: 0;
  padding-right: 0;
}
.input-group > .form-control:not(:last-child),
.input-group > .custom-select:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group .search-box {
  box-shadow: none;
}
.input-group > .input-group-prepend:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group > .input-group-prepend > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0.5rem !important;
  border-bottom-right-radius: 0.5rem !important;
}
.input-group-prepend .btn,
.input-group-append .btn {
  position: relative;
  z-index: 2;
}
.input-group-prepend {
  margin-right: -2px;
}
.search-box {
  height: calc(2.25em + 1.4rem + 0.0625rem);
  padding: 0.7rem 1rem;
  line-height: 1.5;
  font-size: 1rem;
  border-radius: 0.3rem;
}
</style>
