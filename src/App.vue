<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  line-height: 1.42857143;
  color: #444;
  background-color: #fff;
  padding-bottom:0 !important;
  margin: 0;
  text-align: center;
  font-weight: 400;
}

ul,li,ol{padding: 0;margin: 0;list-style: none;}


.btn {
  text-decoration: none;
	color: white;
	padding: 6px 30px;
	display: inline-block;
	position: relative;
	border: 1px solid rgba(0,0,0,0.21);
	border-bottom: 4px solid rgba(0,0,0,0.21);
	border-radius: 4px;
	text-shadow: 0 1px 0 rgba(0,0,0,0.15);
}

.btn.green {
	background: rgba(130,200,160,1);
	background: -moz-linear-gradient(top, rgba(130,200,160,1) 0%, rgba(130,199,158,1) 100%);
	background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(130,200,160,1)), color-stop(100%, rgba(130,199,158,1)));
	background: -webkit-linear-gradient(top, rgba(130,200,160,1) 0%, rgba(130,199,158,1) 100%);
	background: -o-linear-gradient(top, rgba(130,200,160,1) 0%, rgba(130,199,158,1) 100%);
	background: -ms-linear-gradient(top, rgba(130,200,160,1) 0%, rgba(130,199,158,1) 100%);
	background: linear-gradient(to bottom, rgba(130,200,160,1) 0%, rgba(124, 185, 149, 1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#82c8a0', endColorstr='#82c79e', GradientType=0 );
}

.btn.green:active  {background: #72B08E;}

</style>
