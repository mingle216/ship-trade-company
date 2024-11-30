module.exports = {
  apps: [
    {
      name: 'ship-trade-company-web', // 桌面端应用的名称
      script: 'npm',
      args: 'start',
      instances: 1, // 启动多个实例以支持负载均衡
      exec_mode: 'cluster', // 使用集群模式
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
