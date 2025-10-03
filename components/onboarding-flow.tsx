"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Define types for our preference options
type ColorOption = {
  id: string
  name: string
  hex: string
}

type StyleOption = {
  id: string
  name: string
  description: string
  imageUrl: string
}

type OccasionOption = {
  id: string
  name: string
  icon: React.ReactNode
}

// Mock data
const colorOptions: ColorOption[] = [
  { id: "black", name: "Black", hex: "#000000" },
  { id: "navy", name: "Navy", hex: "#2A2D4F" },
  { id: "white", name: "White", hex: "#FFFFFF" },
  { id: "beige", name: "Beige", hex: "#F5F5DC" },
  { id: "gray", name: "Gray", hex: "#808080" },
  { id: "red", name: "Red", hex: "#FF0000" },
  { id: "coral", name: "Coral", hex: "#FF6B6B" },
  { id: "teal", name: "Teal", hex: "#4ECDC4" },
  { id: "green", name: "Green", hex: "#00FF00" },
  { id: "yellow", name: "Yellow", hex: "#FFFF00" },
  { id: "purple", name: "Purple", hex: "#800080" },
  { id: "pink", name: "Pink", hex: "#FFC0CB" },
]

const styleOptions: StyleOption[] = [
  {
    id: "casual",
    name: "Casual",
    description: "Relaxed, everyday wear",
    imageUrl: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "formal",
    name: "Formal",
    description: "Polished, professional attire",
    imageUrl: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "streetwear",
    name: "Streetwear",
    description: "Urban, trendy aesthetic",
    imageUrl: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "athleisure",
    name: "Athleisure",
    description: "Athletic, comfortable style",
    imageUrl: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "bohemian",
    name: "Bohemian",
    description: "Free-spirited, artistic flair",
    imageUrl: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "minimalist",
    name: "Minimalist",
    description: "Simple, clean silhouettes",
    imageUrl: "/placeholder.svg?height=120&width=120",
  },
]

const occasionOptions: OccasionOption[] = [
  { id: "everyday", name: "Everyday", icon: "🏠" },
  { id: "work", name: "Work", icon: "💼" },
  { id: "dateNight", name: "Date Night", icon: "❤️" },
  { id: "workout", name: "Workout", icon: "🏋️" },
  { id: "formal", name: "Formal Events", icon: "👔" },
  { id: "vacation", name: "Vacation", icon: "🏖️" },
]

export default function OnboardingFlow() {
  const [step, setStep] = useState(0)
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([])

  const steps = [
    {
      title: "Welcome to Fashion AI",
      description: "Let's customize your style recommendations",
    },
    {
      title: "Pick Your Colors",
      description: "Select the colors you love to wear",
      maxSelections: 5,
    },
    {
      title: "Your Style Vibe",
      description: "Choose styles that match your personality",
      maxSelections: 3,
    },
    {
      title: "Dress for Occasions",
      description: "What events do you need outfits for?",
      maxSelections: 4,
    },
    {
      title: "All Set!",
      description: "Your personalized fashion experience awaits",
    },
  ]

  const currentStep = steps[step]

  const handleColorToggle = (colorId: string) => {
    if (selectedColors.includes(colorId)) {
      setSelectedColors(selectedColors.filter((id) => id !== colorId))
    } else if (selectedColors.length < (currentStep.maxSelections || 0)) {
      setSelectedColors([...selectedColors, colorId])
    }
  }

  const handleStyleToggle = (styleId: string) => {
    if (selectedStyles.includes(styleId)) {
      setSelectedStyles(selectedStyles.filter((id) => id !== styleId))
    } else if (selectedStyles.length < (currentStep.maxSelections || 0)) {
      setSelectedStyles([...selectedStyles, styleId])
    }
  }

  const handleOccasionToggle = (occasionId: string) => {
    if (selectedOccasions.includes(occasionId)) {
      setSelectedOccasions(selectedOccasions.filter((id) => id !== occasionId))
    } else if (selectedOccasions.length < (currentStep.maxSelections || 0)) {
      setSelectedOccasions([...selectedOccasions, occasionId])
    }
  }

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      console.log("Onboarding complete!", {
        selectedColors,
        selectedStyles,
        selectedOccasions,
      })
      // Here you would typically navigate to the main app
      // or handle the completion in some way
    }
  }

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-neutral">
      {/* Progress bar */}
      <div className="pt-4 px-4 pb-2 bg-neutral">
        <div className="flex justify-between mb-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={cn("h-1 flex-1 mx-0.5 rounded", index <= step ? "bg-accent" : "bg-gray-200")}
            ></div>
          ))}
        </div>
        <p className="text-xs text-right font-poppins text-muted-foreground">
          Step {step + 1} of {steps.length}
        </p>
      </div>

      {/* Content area */}
      <div className="flex-1 px-5 py-6 overflow-y-auto">
        <h1 className="text-2xl font-bold font-inter text-primary mb-2">{currentStep.title}</h1>
        <p className="text-sm font-poppins text-muted-foreground mb-6">{currentStep.description}</p>

        {/* Welcome screen */}
        {step === 0 && (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-4">
              <span className="text-4xl">👕</span>
            </div>
            <p className="text-center font-poppins mb-4">
              We'll help you discover your unique style and build a wardrobe you love.
            </p>
            <p className="text-center text-sm font-poppins text-muted-foreground">
              Your preferences help our AI suggest perfect outfit combinations.
            </p>
          </div>
        )}

        {/* Color selection */}
        {step === 1 && (
          <div>
            <p className="font-poppins text-sm mb-2">Select up to {currentStep.maxSelections} colors:</p>
            <div className="grid grid-cols-4 gap-3 mb-4">
              {colorOptions.map((color) => (
                <button
                  key={color.id}
                  onClick={() => handleColorToggle(color.id)}
                  className={cn(
                    "flex flex-col items-center p-2 rounded-lg transition-all",
                    selectedColors.includes(color.id)
                      ? "bg-primary bg-opacity-10 ring-2 ring-primary"
                      : "bg-white hover:bg-gray-50",
                  )}
                >
                  <div
                    className="w-12 h-12 rounded-full mb-2 relative"
                    style={{
                      backgroundColor: color.hex,
                      border: color.hex === "#FFFFFF" ? "1px solid #DDDDDD" : "none",
                    }}
                  >
                    {selectedColors.includes(color.id) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Check
                          className={cn(
                            "h-6 w-6",
                            ["#FFFFFF", "#F5F5DC", "#FFFF00"].includes(color.hex) ? "text-primary" : "text-white",
                          )}
                        />
                      </div>
                    )}
                  </div>
                  <span className="text-xs font-poppins text-center">{color.name}</span>
                </button>
              ))}
            </div>
            {selectedColors.length > 0 && (
              <p className="text-xs font-poppins text-muted-foreground">
                {selectedColors.length} of {currentStep.maxSelections} selected
              </p>
            )}
          </div>
        )}

        {/* Style selection */}
        {step === 2 && (
          <div>
            <p className="font-poppins text-sm mb-2">Select up to {currentStep.maxSelections} styles:</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {styleOptions.map((style) => (
                <button
                  key={style.id}
                  onClick={() => handleStyleToggle(style.id)}
                  className={cn(
                    "flex flex-col items-center p-3 rounded-lg transition-all",
                    selectedStyles.includes(style.id)
                      ? "bg-primary bg-opacity-10 ring-2 ring-primary"
                      : "bg-white hover:bg-gray-50",
                  )}
                >
                  <div className="relative w-full aspect-square mb-2 overflow-hidden rounded-lg">
                    <img
                      src={style.imageUrl || "/placeholder.svg"}
                      alt={style.name}
                      className="object-cover w-full h-full"
                    />
                    {selectedStyles.includes(style.id) && (
                      <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-inter font-medium">{style.name}</span>
                  <span className="text-xs font-poppins text-muted-foreground text-center">{style.description}</span>
                </button>
              ))}
            </div>
            {selectedStyles.length > 0 && (
              <p className="text-xs font-poppins text-muted-foreground">
                {selectedStyles.length} of {currentStep.maxSelections} selected
              </p>
            )}
          </div>
        )}

        {/* Occasion selection */}
        {step === 3 && (
          <div>
            <p className="font-poppins text-sm mb-2">Select up to {currentStep.maxSelections} occasions:</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {occasionOptions.map((occasion) => (
                <button
                  key={occasion.id}
                  onClick={() => handleOccasionToggle(occasion.id)}
                  className={cn(
                    "flex items-center p-3 rounded-lg transition-all",
                    selectedOccasions.includes(occasion.id)
                      ? "bg-primary bg-opacity-10 ring-2 ring-primary"
                      : "bg-white hover:bg-gray-50",
                  )}
                >
                  <span className="text-2xl mr-3">{occasion.icon}</span>
                  <span className="text-sm font-inter font-medium">{occasion.name}</span>
                  {selectedOccasions.includes(occasion.id) && <Check className="h-4 w-4 ml-auto text-primary" />}
                </button>
              ))}
            </div>
            {selectedOccasions.length > 0 && (
              <p className="text-xs font-poppins text-muted-foreground">
                {selectedOccasions.length} of {currentStep.maxSelections} selected
              </p>
            )}
          </div>
        )}

        {/* Completion screen */}
        {step === 4 && (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-4">
              <Check className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold font-inter mb-2">Personalization Complete!</h3>
            <p className="text-center font-poppins mb-4">We've created your style profile based on your preferences.</p>
            <p className="text-center text-sm font-poppins text-muted-foreground">
              Your AI wardrobe assistant is ready to help you look your best.
            </p>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex justify-between">
          {step > 0 ? (
            <Button variant="outline" onClick={prevStep} className="font-inter text-primary">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
          ) : (
            <div></div> // Empty div to maintain layout
          )}

          <Button
            onClick={nextStep}
            className="bg-primary hover:bg-[#1F2144] text-white font-inter"
            disabled={
              (step === 1 && selectedColors.length === 0) ||
              (step === 2 && selectedStyles.length === 0) ||
              (step === 3 && selectedOccasions.length === 0)
            }
          >
            {step === steps.length - 1 ? (
              "Get Started"
            ) : (
              <>
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

