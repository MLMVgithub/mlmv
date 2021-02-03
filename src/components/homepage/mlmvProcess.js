import React from "react"
//import { Link } from "gatsby"
import mlmvProcessStyles from '../homepage/mlmvProcess.module.scss'
//import { useTranslation } from "react-i18next"

const MLMVProcessSection = () => {
    // const { t, i18n } = useTranslation("peerSupporters")
    // const tagsTranslate = i18n.language
    return (
        <>
            <section className={mlmvProcessStyles.wrapper + ' section-layout-wide'}>
                <div className={mlmvProcessStyles.SectionOutterWrapper}>
                    <div className={mlmvProcessStyles.SectionInnerWrapper}>
                        <div className={mlmvProcessStyles.steps}>
                            <div>
                                <p>1</p>
                            </div>
                        </div>
                        <div className={mlmvProcessStyles.content}>
                            <p>Talk with one of our connectors/Kaitūhono’s about your ideas, goals and opportunities to create a good life.</p>
                        </div>
                    </div>
                </div>

                <div className={mlmvProcessStyles.SectionOutterWrapper}>
                    <div className={mlmvProcessStyles.SectionInnerWrapper}>
                        <div className={mlmvProcessStyles.steps}>
                            <div>
                                <p>2</p>
                            </div>
                        </div>
                        <div className={mlmvProcessStyles.content}>
                            <p>Decide who you want to involve to help you.</p>
                        </div>
                    </div>
                </div>

                <div className={mlmvProcessStyles.SectionOutterWrapper}>
                    <div className={mlmvProcessStyles.SectionInnerWrapper}>
                        <div className={mlmvProcessStyles.steps}>
                            <div>
                                <p>3</p>
                            </div>
                        </div>
                        <div className={mlmvProcessStyles.content}>
                            <p>Make a plan and create a funding budget.</p>
                        </div>
                    </div>
                </div>

                <div className={mlmvProcessStyles.SectionOutterWrapper}>
                    <div className={mlmvProcessStyles.SectionInnerWrapper}>
                        <div className={mlmvProcessStyles.steps}>
                            <div>
                                <p>4</p>
                            </div>
                        </div>
                        <div className={mlmvProcessStyles.content}>
                            <p>Connect with the people and or organisations who will help you with your good life.</p>
                        </div>
                    </div>
                </div>

                <div className={mlmvProcessStyles.SectionOutterWrapper}>
                    <div className={mlmvProcessStyles.SectionInnerWrapper}>
                        <div className={mlmvProcessStyles.steps}>
                            <div>
                                <p>5</p>
                            </div>
                        </div>
                        <div className={mlmvProcessStyles.content}>
                            <p>Live that good life.</p>
                        </div>
                    </div>
                </div>


            </section >



        </>
    )
}

export default MLMVProcessSection
