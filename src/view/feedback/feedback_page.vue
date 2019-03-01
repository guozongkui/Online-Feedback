<template>
    <div>
        <Card>
            <div slot="title">
                <p style="height:auto;">
                    <Icon type="md-remove"/>
                    问题反馈
                    <Button type="primary" @click="feedback" style="float:right;">反馈问题</Button>
                </p>
                
            </div>
            <div>
                
                <Table :columns="columns" :data="data" border stripe></Table>
            </div>
        </Card>
    </div>
</template>
<script>
export default {
  data () {
    return {
        columns: [
            {
                title: '提问者',
                key: 'questioner',
                align: 'center'
            },
            {
                title: '提出日期',
                key: 'proposedtime',
                align: 'center'
            },
            {
                title: '内容',
                key: 'content',
                align: 'center'
            }
        ],
        data: []
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
