<script>
  import { Line, mixins } from 'vue-chartjs'

  export default {
    mixins: [mixins.reactiveProp],
    extends: Line,
    props: {
      options: {
        type: Object,
        default: () => {
            return {
              responsive: true,
              maintainAspectRatio: false,
            }
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    },
    watch: {
      chartData(val) {}
    }
  }

</script>

<style scoped>

</style>