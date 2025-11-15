import { Metadata } from 'next'
import SurveyHero from '@/components/survey/survey-hero'
import SurveyForm from '@/components/survey/survey-form'
import SurveyStats from '@/components/survey/survey-stats'

export const metadata: Metadata = {
  title: 'Survei Kepuasan Pasien RSUD Kepulauan Talaud',
  description: 'Berikan feedback Anda untuk membantu kami meningkatkan kualitas layanan',
}

export default function SurveyPage() {
  return (
    <>
      <SurveyHero />
      <SurveyForm />
      <SurveyStats />
    </>
  )
}
