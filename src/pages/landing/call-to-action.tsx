import React from "react";
import { useNavigate } from "react-router-dom";
import { CastleNoBg } from "../../assets";
import { Button, SocialButton } from "../../components";
import { Page, Social } from "../../constants";

const castleStyle = "luxy-el absolute object-scale-down";
const smCastleStyle = "h-[30rem] w-[30rem] bottom-0";
const mdCastleStyle = "md:h-[40rem] md:w-[40rem]";
const lgCastleStyle = "lg:inset-full lg:w-[40rem] lg:h-[40rem] lg:inset-full lg:-translate-x-2/3 lg:-translate-y-full";
const xlCastleStyle = " xl:h-[50rem] xl:w-[50rem]";

const castleFullStyle = `${castleStyle} ${smCastleStyle} ${mdCastleStyle} ${lgCastleStyle} ${xlCastleStyle}`;

export default function CallToAction() {
	const navigate = useNavigate();

	const handleDismissLandingPage = () => {
		navigate(`/${Page.HOME}`);
	};

	return (
		<div className="relative grid min-h-screen w-full grid-cols-1 lg:grid-cols-3">
			<div
				className="luxy-el stack z-10 col-span-1 items-center whitespace-nowrap
                lg:col-span-2 lg:w-2/3 lg:items-start lg:pl-20 lg:pt-48"
				data-speed-y="5"
			>
				<h1 className="mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
					The Kingdom awaits you!
				</h1>
				<div className="stack items-center gap-4 lg:flex-row  lg:items-start">
					<Button onPress={handleDismissLandingPage} data-testid="landing-page-dismiss-button">
						<div className="flex items-center gap-3">Enter</div>
					</Button>

					<div className="flex gap-4">
						<SocialButton social={Social.TWITTER} />
						<SocialButton social={Social.DISCORD} />
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 flex h-full w-full justify-center lg:justify-start">
				<LargeScreenCastle />
				<SmallScreenCastle />
			</div>
		</div>
	);
}

function SmallScreenCastle() {
	return (
		<img
			src={CastleNoBg}
			alt="castle"
			className={`lg:hidden ${castleFullStyle}`}
			data-speed-y="-10"
			data-offset="420"
		/>
	);
}

function LargeScreenCastle() {
	return (
		<img
			src={CastleNoBg}
			alt="castle"
			className={`hidden lg:block ${castleFullStyle}`}
			data-speed-y="-7"
			data-horizontal="1"
			data-speed-x="-7"
			data-offset="300"
		/>
	);
}
