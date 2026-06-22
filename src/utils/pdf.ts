import html2canvas from 'html2canvas-pro'
import { jsPDF } from 'jspdf'

export async function exportToPdf(element: HTMLElement, filename: string): Promise<void> {
  const clone = element.cloneNode(true) as HTMLElement
  const container = document.createElement('div')
  container.style.cssText = 'position:fixed;left:-9999px;top:0;z-index:-1;background:#fff;'
  container.appendChild(clone)
  document.body.appendChild(container)

  try {
    const canvas = await html2canvas(clone, {
      scale: 3,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      onclone: (_doc, clonedElement) => {
        clonedElement.style.boxShadow = 'none'
      },
    })

    const imgData = canvas.toDataURL('image/jpeg', 1)
    const pdf = new jsPDF('p', 'in', 'letter')

    const pageWidth = 8.5
    const pageHeight = 11
    const imgWidth = pageWidth
    const imgHeight = pageHeight
    // const imgHeight = (canvas.height * imgWidth) / canvas.width

    let heightLeft = imgHeight
    let position = 0

    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight

    while (heightLeft > 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    pdf.save(filename)
  } finally {
    document.body.removeChild(container)
  }
}
