import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  if (!process.env.SLACKSYNC_TOKEN) {
    throw new Error('SLACKSYNC_TOKEN has to be set in order to run tests')
  }

  if (!process.env.SLACKSYNC_CHANNEL) {
    throw new Error('SLACKSYNC_CHANNEL has to be set in order to run tests')
  }

  const ip = path.join(__dirname, '..', 'dist', 'main.js')
  const options: cp.ExecSyncOptions = {
    env: process.env,
  }

  console.log(cp.execSync(`node ${ip}`, options).toString())
})
