export interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  status: string
  articleCount: number
  period: string
  stack: string[]
  articles: string[]
}

const projectsData: Project[] = [
  {
    title: 'RetroPop Mini',
    description:
      '一个围绕掌机交互、状态机设计、GPIO 输入扩展和权限收缩持续推进的小型项目。内容按开发日志顺序展开，从点亮开机图到输入控制重构，把实现过程和安全思考一起留下来。',
    imgSrc: '/static/images/GameCC/day1-result.png',
    href: '/blog/RetroPop_Mini',
    status: '持续迭代中',
    articleCount: 7,
    period: 'Day 1 - Day 7',
    stack: ['ESP32-C3', 'GPIO', 'State Machine', 'Embedded UI'],
    articles: [
      'RetroPop_Mini',
      'retropop-mini-day2-state-machine-and-gpio-buttons',
      'retropop-mini-day3-gpio-resource-map-and-attack-surface',
      'retropop-mini-day4-left-right-buttons-and-input-expansion',
      'retropop-mini-day5-state-machine-input-permission-control',
      'retropop-mini-day6-input-deprivilege-direction-control-upgrade',
      'retropop-mini-day7-pixel-to-grid-movement-refactor',
    ],
  },
  {
    title: 'ADAS Sensor Lab',
    description:
      '一个以 ESP32、MPU6050 和故障分级逻辑为核心的小型 ADAS 传感器实验项目。内容从最小接线与串口观察开始，逐步推进到运行状态输出、安全意识、失败计数和诊断接口设计。',
    imgSrc: '/static/images/ADAS/adas-day4-ecu-testbed-architecture.png',
    href: '/blog/adas-day2-esp32-mpu6050-read-imu-data',
    status: '实验记录中',
    articleCount: 4,
    period: 'Day 2 - Day 5',
    stack: ['ESP32', 'MPU6050', 'I2C', 'Diagnostics'],
    articles: [
      'adas-day2-esp32-mpu6050-read-imu-data',
      'adas-day3-sensor-module-first-security-awareness',
      'adas-day4-failure-counts-and-fault-grading',
      'adas-day5-first-diagnostic-interface',
    ],
  },
  {
    title: '嵌入式安全从 0 到 1',
    description:
      '一个面向入门阶段的嵌入式安全基础系列，按教学顺序把 const、volatile、static、extern，编译与链接、程序内存布局、指针数组字符串，再到 struct、union、enum、bitfield、大端小端、对齐和填充串成一条完整学习路径。',
    imgSrc: '/static/images/Linux_study/Compilation.png',
    href: '/blog/const-volatile-static-extern',
    status: '教学系列进行中',
    articleCount: 6,
    period: '2026-01-27 -> 2026-05-12',
    stack: ['C', 'Memory Layout', 'Pointers', 'Bitfield', 'Endianness', 'Linkage'],
    articles: [
      'const-volatile-static-extern',
      'what-compilation-assembly-and-linking-actually-do',
      'memory-layout-fundamentals-stack-heap-and-global-static-data-areas',
      'The_Real_Relationship_Between-Pointers-Arrays-and-Strings-in-C',
      'D4_struct_union_enum_bitfield_ECU_message',
      'bigsmallend',
    ],
  },
]

export function getProjectByArticleSlug(slug: string) {
  return projectsData.find((project) => project.articles.includes(slug))
}

export default projectsData
