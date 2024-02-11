# Load the required module for Excel
Import-Module ImportExcel

# Function to generate random string
function Get-RandomString {
    param (
        [int]$length
    )
    $characters = 'abcde0123456789'
    $randomString = -join (Get-Random -InputObject $characters -Count $length)
    return $randomString
}

# Function to generate random date within a specific range
function Get-RandomDate {
    param (
        [datetime]$startDate,
        [datetime]$endDate
    )
    $randomDate = Get-Date (Get-Random -Minimum $startDate.Ticks -Maximum $endDate.Ticks)
    return $randomDate
}

# Set the file path and name
# $filePath = "C:\Path\To\Your\AuditLog.xlsx"

# Create an array to store the data
$auditLogData = @()

# Entities and their time ranges
$entities = @{
    "Quote" = @{
        StartDate = (Get-Date).AddYears(-1)
        EndDate   = (Get-Date)
    }
    "Product" = @{
        StartDate = (Get-Date).AddYears(-1)
        EndDate   = (Get-Date)
    }
    "Incident" = @{
        StartDate = (Get-Date).AddYears(-2)
        EndDate   = (Get-Date)
    }
    "Lot" = @{
        StartDate = (Get-Date).AddYears(-1)
        EndDate   = (Get-Date)
    }
    "Invoice" = @{
        StartDate = (Get-Date).AddYears(-3)
        EndDate   = (Get-Date)
    }
}

# Generate random data
foreach ($entity in $entities.Keys) {
    $entityData = 1..20 | ForEach-Object {
        $createdOn = Get-RandomDate -startDate $entities[$entity].StartDate -endDate $entities[$entity].EndDate
        $objectIdValue = Get-RandomString -length 8

        [PSCustomObject]@{
            ObjectTypeCode = $entity
            CreatedOn_dev      = $createdOn
            ObjectId_Value = $objectIdValue
        }
    }

    $auditLogData += $entityData
}

# Export data to Excel

$auditLogData | Export-Csv -Path "Audit_dev.csv" -NoTypeInformation