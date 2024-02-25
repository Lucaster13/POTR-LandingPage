import React from "react";
import CoinParticles from "../../components/animated/coin-particles";
import TraitParticles from "../../components/animated/trait-particles";
import UpgradeParticles from "../../components/animated/upgrade-particles";

const containerStyle = "flex luxy-el relative rounded-xl border border-primary p-4 bg-dark-3 xl:p-6 2xl:p-8 z-20";
const innerContainerStyle = `stack h-full divide-y divide-primary rounded-xl border border-primary 
bg-subtle bg-opacity-75 p-6 backdrop-blur-sm xl:p-8 2xl:p-10`;
const particlesStyle = "absolute rounded-xl inset-0 -z-20";

const COIN_TITLE = "Gather Coins";
const COIN_INFO = `Rare coins have been appearing in the ruins of the old kingdom. 
They are said to possess the ability to summon a Protector.`;

const BATTLE_TITLE = "Battle for The Kingdom";
const BATTLE_INFO = `Take your Protectors into battle. Compete in tournaments
to earn rare prizes. Restore the Kingdom to its former glory.`;

const MUTABILITY_TITLE = "Upgrade Your Protectors";
const MUTABILITY_INFO = `Protectors of The Rand can be upgraded over time. Each Protector can 
level up and become more powerful. Higher level Protectors also have access to exclusive events & adventures.`;

const headerStyle = "pb-2 text-2xl 2xl:text-3xl";
const bodyStyle = "pt-4 text-lg sm:text-xl 2xl:text-2xl";

export default function Info() {
	return (
		<div className="flex max-h-screen min-h-screen min-w-full">
			<div className="m-auto grid w-5/6 grid-cols-1 gap-x-10 gap-y-40 lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-3 2xl:gap-x-10">
				<div className={`${containerStyle} translate-y-[10rem] xl:translate-y-[20rem]`} data-speed-y="-10">
					<div className={innerContainerStyle}>
						<h1 className={headerStyle}>{COIN_TITLE}</h1>
						<span className={bodyStyle}>{COIN_INFO}</span>
					</div>
					<CoinParticles canvasClassName={particlesStyle} />
				</div>
				<div
					className={`${containerStyle} translate-y-[20rem] lg:translate-y-[45rem] xl:translate-y-[40rem]`}
					data-speed-y="-20"
				>
					<div className={innerContainerStyle}>
						<h1 className={headerStyle}>{BATTLE_TITLE}</h1>
						<span className={bodyStyle}>{BATTLE_INFO}</span>
					</div>
					<TraitParticles canvasClassName={particlesStyle} />
				</div>
				<div
					className={`${containerStyle} translate-y-[30rem] lg:translate-y-[50rem] xl:translate-y-[60rem]`}
					data-speed-y="-30"
				>
					<div className={innerContainerStyle}>
						<h1 className={headerStyle}>{MUTABILITY_TITLE}</h1>
						<span className={bodyStyle}>{MUTABILITY_INFO}</span>
					</div>
					<UpgradeParticles canvasClassName={particlesStyle} />
				</div>
			</div>
		</div>
	);
}
