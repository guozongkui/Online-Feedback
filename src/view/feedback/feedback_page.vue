<template>
    <div>
        <Card>
            <div slot="title">
                <p>
                    <Icon type="md-remove"/>
                    问题反馈
                </p>
            </div>
            <div>
                <Card>
                    <Button type="primary" @click="feedback">反馈问题</Button>
                </Card>
            </div>
        </Card>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    feedback () {
        this.getRequest('/feedback','').then(response => {
            console.log(response)
        })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
