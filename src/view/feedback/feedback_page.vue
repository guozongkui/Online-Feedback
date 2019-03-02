<template>
    <div>
        <Card>
            <div slot="title">
                <p style="height:auto;">
                    <Icon type="md-remove"/>
                    问题反馈
                    <Button type="primary" @click="feedback" style="float: right;">问题反馈</Button>
                </p>
                <Modal v-model="feedbackModalVisible" :title="feedbackModalTitle" :mask-closable="false">
                    <Form label-position="right" :label-width="50">
                        <FormItem label="标题：">
                            <Input placeholder="请输入标题..."></Input>
                        </FormItem>
                        <FormItem label="内容：">
                            <Input type="textarea" :rows="4" placeholder="请输入内容..."></Input>
                        </FormItem>
                        <FormItem label="图片：">
                            <Upload
                                ref="upload"
                                :show-upload-list="false"
                                :format="['jpg','jpeg','png']"
                                :max-size="2048"
                                multiple
                                type="drag"
                                action=""
                                style="display: inline-block;width:58px;">
                                <div style="width: 58px;height:58px;line-height: 58px;">
                                    <Icon type="ios-camera" size="20"></Icon>
                                </div>
                            </Upload>
                        </FormItem>
                    </Form>
                    <div slot="footer">
                        <Button>取消</Button>
                        <Button type="primary">确认</Button>
                    </div>
                </Modal>
            </div>
            <div>
                <Form inline>
                    <FormItem>
                        <DatePicker type="date" placeholder="请选择日期..."></DatePicker>
                    </FormItem>
                    <FormItem>
                        <Button type="primary">查询</Button>
                    </FormItem>
                </Form>
                <Table :columns="columns" :data="data" border stripe></Table>
            </div>
        </Card>
    </div>
</template>
<script>
export default {
    data () {
        return {
            feedbackModalVisible: false,
            feedbackModalTitle: '问题反馈',
            columns: [
                
            ],
            data: []
        }
    },
    methods: {
        feedback () {
            this.feedbackModalVisible = true;
        }
    }
    }
</script>
<style lang="less" scoped>

</style>
