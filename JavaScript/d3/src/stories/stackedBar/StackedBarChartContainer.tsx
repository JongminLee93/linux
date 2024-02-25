import { useChartDimensions } from '../component/hook/useChartDimensions';

import StackedBarChart from './StackedBarChart';

interface Data {
  name: string;
  source: string;
  value: number;
}

type Source =
  "에너지산업 연소" |
  "비산업 연소" |
  "제조업 연소" |
  "생산공정" |
  "에너지수송 및 저장" |
  "유기용제 사용" |
  "도로이동오염원" |
  "비도로이동오염원" |
  "폐기물처리" |
  "농업" |
  "기타 면오염원" |
  "비산먼지" |
  "생물성 연소"


interface Props {
  width?: number;
  height?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  data?: Record<string, string | number>[];
  pollutant: string;
  selectedSources?: Source[];
  xAxisLabel?: string;
}

const StackedBarChartContainer = (props: Props) => {
  const { width, height, marginLeft, marginRight, marginTop, marginBottom } = props
  const { data, xAxisLabel, selectedSources, pollutant } = props

  const [ref, dms] = useChartDimensions({
    width,
    height,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom
  });

  return (
    <div
      className='Chart_wrapper'
      ref={ref}
      style={{
        width,
        height,
        outline: 'solid',
      }}
    >
      {
        data &&
        <StackedBarChart
          data={data}
          x={pollutant}
          y={Object.keys(data.length > 0 ? data[0] : []).includes('sigungu') ? 'sigungu' : 'sido'}
          stack={'source_main'}
          stackOnly={selectedSources}
          dimension={dms}
          xAxisLabel={xAxisLabel}
        />
      }
    </div>
  )
}

export default StackedBarChartContainer