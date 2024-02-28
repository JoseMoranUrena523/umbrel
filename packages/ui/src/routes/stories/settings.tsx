import {Card} from '@/components/ui/card'
import {H2, H3} from '@/layouts/stories'
import {ProgressStatCardContent} from '@/routes/settings/_components/progress-card-content'
import {Button} from '@/shadcn-components/ui/button'
import {Separator} from '@/shadcn-components/ui/separator'
import {TEMP_NORMAL_MAX, TEMP_NORMAL_MIN, TEMP_THROTTLE, TEMP_TOO_COLD, TEMP_TOO_HOT} from '@/utils/tempurature'

import {CpuTempCardContent} from '../settings/_components/cpu-temp-card-content'
import {DeviceInfoContent, HostEnvironmentIcon} from '../settings/_components/device-info-content'

const tempThresholds = [
	TEMP_TOO_COLD - 1,
	// TEMP_TOO_COLD,
	TEMP_NORMAL_MIN,
	TEMP_NORMAL_MAX,
	TEMP_THROTTLE + 1,
	TEMP_TOO_HOT,
	TEMP_TOO_HOT + 1,
]

export default function SettingsStory() {
	return (
		<div className='flex flex-col flex-wrap items-start gap-8 bg-white/10 p-8'>
			<H3>Device Icons</H3>
			<div className='flex gap-4'>
				<HostEnvironmentIcon />
				<HostEnvironmentIcon environment='umbrel-home' />
				<HostEnvironmentIcon environment='raspberry-pi' />
				<HostEnvironmentIcon environment='linux' />
			</div>
			<div className='flex flex-wrap gap-2 bg-red-500/10'>
				<DeviceInfoContent />
				<DeviceInfoContent
					umbrelHostEnvironment='umbrel-home'
					osVersion='v0.4.0'
					modelNumber='U130121'
					serialNumber='U230300078'
				/>
				<DeviceInfoContent umbrelHostEnvironment='raspberry-pi' osVersion='v0.4.0' />
				<DeviceInfoContent umbrelHostEnvironment='linux' osVersion='v0.4.0' />
			</div>
			<H2>Progress Card</H2>
			<Card>
				<ProgressStatCardContent
					title='Sync Status'
					value='69.69'
					valueSub='%'
					secondaryValue='69.69 GB'
					progress={0.6969}
				/>
			</Card>
			<Card>
				<ProgressStatCardContent
					title='Ljgrem Ipsum Dolor Sit Amet'
					value='Ljgrem Ipsum Dolor Sit Amet'
					valueSub='Ljgrem Ipsum Dolor Sit Amet'
					secondaryValue='Ljgrem Ipsum Dolor Sit Amet'
					progress={0.6969}
				/>
			</Card>
			<div className='w-[300px] resize-x overflow-auto bg-red-500/10 p-4'>
				<Card>
					<ProgressStatCardContent
						title='Ljgrem Ipsum Dolor Sit Amet'
						value='Ljgrem Ipsum Dolor Sit Amet'
						valueSub='Ljgrem Ipsum Dolor Sit Amet'
						secondaryValue='Ljgrem Ipsum Dolor Sit Amet'
						progress={0.6969}
					/>
				</Card>
			</div>
			<H2>Tempurature Card</H2>
			<Button
				onClick={() => {
					localStorage.removeItem('UMBREL_temp-unit')
					window.location.reload()
				}}
			>
				Clear local storage temp
			</Button>
			<H3>Extreme</H3>
			<div className='w-[300px] resize-x overflow-auto bg-red-500/10 p-4'>
				<Card>
					<CpuTempCardContent tempInCelcius={-999999} />
				</Card>
			</div>
			<div className='w-[300px] resize-x overflow-auto bg-red-500/10 p-4'>
				<Card>
					<CpuTempCardContent tempInCelcius={999999} />
				</Card>
			</div>
			<H3>undefined</H3>
			<Card>
				<CpuTempCardContent />
			</Card>
			<H3>NaN</H3>
			<Card>
				<CpuTempCardContent tempInCelcius={NaN} defaultUnit='c' />
			</Card>
			<H3>Infinity</H3>
			<Card>
				<CpuTempCardContent tempInCelcius={Infinity} defaultUnit='c' />
			</Card>
			<H3>69</H3>
			<Card>
				<CpuTempCardContent tempInCelcius={69} defaultUnit='c' />
			</Card>
			<Card>
				<CpuTempCardContent tempInCelcius={20.5} defaultUnit='f' />
			</Card>
			<Separator />
			<div className='flex flex-col gap-2'>
				{tempThresholds.map((temp) => (
					<Card key={temp}>
						<CpuTempCardContent tempInCelcius={temp} defaultUnit='c' />
					</Card>
				))}
			</div>
		</div>
	)
}
