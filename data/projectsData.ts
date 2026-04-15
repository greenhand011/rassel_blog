interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  status: string
  articleCount: number
  period: string
  stack: string[]
}

const projectsData: Project[] = [
  {
    title: 'RetroPop Mini',
    description:
      '一个围绕嵌入式交互、状态机设计、GPIO 输入控制与权限收缩持续推进的小型项目。内容按 day-by-day 的方式记录，从按钮接线、资源映射、输入扩展到像素级移动重构，把实现过程和安全思考一起留下来。',
    imgSrc: '/static/images/GameCC/day1-result.png',
    href: '/blog/retropop-mini-day2-state-machine-and-gpio-buttons',
    status: '持续迭代中',
    articleCount: 6,
    period: 'Day 2 - Day 7',
    stack: ['ESP32-C3', 'GPIO', 'State Machine', 'Embedded UI'],
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
  },
  {
    title: '嵌入式安全从 0 到 1',
    description:
      '一个面向入门阶段的嵌入式安全基础系列，按教学顺序把编译、汇编、链接，程序内存布局，以及指针、数组和字符串的关系串成一条完整学习路径。适合作为后续继续写结构体、联合体、位域、ELF 和底层调试内容的起点。',
    imgSrc: '/static/images/Linux_study/Compilation.png',
    href: '/blog/what-compilation-assembly-and-linking-actually-do',
    status: '教学系列进行中',
    articleCount: 3,
    period: '2026-04-11 -> 2026-04-14',
    stack: ['C', 'Memory Layout', 'Pointers', 'Compilation'],
  },
]

export default projectsData
