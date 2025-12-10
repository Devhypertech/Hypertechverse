module.exports = {
  apps: [
    {
      name: 'hypertechverse',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/Hypertechverse',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3300
      },
      error_file: '/var/log/pm2/hypertechverse-error.log',
      out_file: '/var/log/pm2/hypertechverse-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      ignore_watch: ['node_modules', '.next', 'public']
    }
  ]
};
