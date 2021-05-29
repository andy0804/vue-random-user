Vue -
Pre-requisites :
JS Fundamentals
Async Programming
Array Methods
Fetch API
NPM

So what is included in a COMPONENT

<template>
<header><h1>{{title}}</h1> </header>
</template>

<script>
export default {
props:{
 title:String;
}}
</script>

scoped: Means only scoped to that component

<style scoped>
header{
display:flex;
justify-content.
.....
}
</style>

Component includes a template for markup
Logic for state
Style for the template

You can also pass props to that component

<Header title="Task Tracker"/>

Worked with State/ Data

Compoents can have their own state which can determine how
a specific component behaves and what data is displayed

Some state may be local to a component and some may be global or app
level state that needs to be shared with multiple components

Vuex is a state manaager for global state in large applications
(similar to Vuex)

Vue3 Composotion API

OPTIONS API vs Composition API

-Aims to address code reusablitity
-Aims to address code readiblity

VUE CLI
Standard tooling for VUE JS development
CLI for creating Vue Apps
Dev Server and Easy Production Build
Optional GUI for managing VUE Projects
Integrated Testing , TS suppoet
